<script setup lang="ts">
const projectFolder = import.meta.env.VITE_PROJECT_FOLDER
</script>

<template>
  <div id="home" class="flex h-screen justify-center items-center">
   Hello! {{projectFolder}}
  </div>
</template>

<route lang="yaml">
meta:
  layout: blank
</route>
