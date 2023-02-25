<script lang="ts">
  import { ImageStatus } from '../types.d'
  import { imageStatus, modifiedImage, originalImage } from './store'

  import { Cloudinary } from '@cloudinary/url-gen'
  import { backgroundRemoval } from '@cloudinary/url-gen/actions/effect'

  import Dropzone from 'dropzone'
  import 'dropzone/dist/dropzone.css'

  import { onMount } from 'svelte'

  const CLOUDINARY_API_URL = 'https://api.cloudinary.com/v1_1/'
  const CLOUDINARY_CLOUD_NAME = 'dtmarfdry'
  const CLOUDINARY_UPLOAD_PRESET = 's3lekov7'
  const CLOUDINARY_API_KEY = 847737468947174

  const cloudinary = new Cloudinary({
    cloud: { cloudName: CLOUDINARY_CLOUD_NAME },
    url: { secure: true }
  })


  onMount(() => {
    const dropzone = new Dropzone('#dropzone', {
      uploadMultiple: false,
      acceptedFiles: '.jpg,.png,.webp',
      maxFiles: 1
    })

    dropzone.on('sending', (file, xhr, formData) => {
      imageStatus.set(ImageStatus.UPLOADING)

      // Aquí podemos añadir la apiKey, configuración
      formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET)
      formData.append('timestamp', Date.now() / 1000)
      formData.append('api_key', CLOUDINARY_API_KEY)
    })

    dropzone.on('success', (file, response) => {
      const { public_id: publicId, secure_url: url } = response

      // Crear la imagen con fondo transparente
      // y guardar en el backgroundImage
      const imageWithoutBackground = cloudinary
        .image(publicId)
        .effect(backgroundRemoval())

      imageStatus.set(ImageStatus.DONE)
      originalImage.set(url)
      modifiedImage.set(imageWithoutBackground.toURL())

      console.log(response)
      console.log('OK')
    })

    dropzone.on('error', (file, response) => {
      console.log('BAD')
      console.log(response, file)
    })
  })
</script>

<form
  id="dropzone"
  class="shadow-2xl border-dashed border-2 border-gray-300 rounded-lg aspect-video flex items-center justify-center flex-col"
  action={`${CLOUDINARY_API_URL}${CLOUDINARY_CLOUD_NAME}/image/upload`}>
  {#if $imageStatus === ImageStatus.READY}
    <button
      class="font-bold pointer-events-none bg-blue-600 rounded-full text-bold text-white text-xl px-10 py-4">
      Upload files
    </button>
    <strong class="text-lg mt-4 text-gray-500">or drop a file</strong>
  {:else if $imageStatus === ImageStatus.UPLOADING}
    <strong class="text-lg mt-4 text-gray-800">Uploading file...</strong>
  {/if}
</form>
