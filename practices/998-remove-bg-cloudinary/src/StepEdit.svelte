<script lang="ts">
  import "two-up-element"
  import { originalImage, modifiedImage } from "./store";

  let processingImage = true
  let tries = 0
  let intervalId: number

  $: {
    if (processingImage) {
      clearInterval(intervalId)
      intervalId = setInterval(() => {
        tries++
        if (tries > 25) {
          processingImage = false
          clearInterval(intervalId)
        }
        const img = new Image()
        img.src = $modifiedImage
        img.onload = () => {
          processingImage = false
          clearInterval(intervalId)
        }
      }, 500)
    }
  }
</script>

<two-up>
  <img src={$originalImage} alt="Imagen original subida por el usuario" />
  {#if processingImage}
    <div class="flex flex-col justify-center items-center">
      <p class="text-center mt-4">Procesando imagen...</p>
    </div>
  {:else}
    <img src={$modifiedImage} alt="Imagen sin fondo subida por el usuario" />
  {/if}
</two-up>

{#if $modifiedImage}
  <a
    download
    href={$modifiedImage}
    class="block bg-blue-500 hover:bg-blue-700 text-xl text-center w-full font-bold text-white rounded-full px-4 py-2 mt-10">
    Descargar imagen sin fondo
  </a>
{/if}