<script setup lang="ts">
const { doLogin, isPending } = $(web3Store())
const text = $computed(() => isPending ? 'Loading' : 'Login')
</script>
<template>
  <div class="hidden items-center lg:flex">
    <button hover="opacity-90" class="bg-black flex items-center border border-transparent rounded-md font-medium drop-shadow-xl text-sm text-white ml-5 py-2 px-4 inline-flex justify-center disabled:(cursor-not-allowed bg-gray-700) " :disabled="isPending" @click="doLogin">
      <eos-icons:loading v-show="isPending" class="mr-2" />
      {{ text }}
    </button>
  </div>
</template>
