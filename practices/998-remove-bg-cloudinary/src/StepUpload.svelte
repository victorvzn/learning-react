<script lang="ts">
  import Dropzone from 'dropzone'
  import 'dropzone/dist/dropzone.css'

  import { onMount } from 'svelte';
</script>

<form
  id="dropzone"
  class="shadow-2xl border-dashed border-2 border-gray-300 rounded-lg aspect-video flex items-center justify-center flex-col">
  <button
    class="pointer-events-none bg-blue-600 rounded-full text-bold text-white text-xl px-6 py-4">
    Upload files
  </button>
</form>
