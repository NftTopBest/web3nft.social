<script setup lang="ts">
const {t} = useI18n()
const showForm = ref(false)

useHead({
  title: t('Home | Web3 NFT Social'),
  meta: [
    { name: 'description', content: 'Web3 NFT With Social' },
  ],
})
</script>

<template>
  <main class="flex justify-center">
    <div class="pt-10 w-250">
      <router-link to="/" class="font-mono font-bold text-center py-4 text-4xl text-sky-400 block">
        {{$t('Web3 NFT Social')}}
      </router-link>
      <div class="flex flex-col text-center py-20">
        <h1 class="font-extrabold tracking-tight text-4xl text-gray-900 sm:text-5xl md:text-6xl">
          <span class="block xl:inline">{{$t('Web3 NFT')}}</span>
          {{ ' ' }}
          <span class="text-indigo-600 block xl:inline">{{ $t('With Social') }}</span>
        </h1>
        <p class="mx-auto max-w-md mt-3 text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
        {{ $t('Connecting all the human on the web3 world by NFTs') }}
        </p>
        <div v-if="showForm" class="flex bg-lime-300 rounded-2xl mt-20 py-20 justify-center items-center">
          <Web3NftFormNFTSearch />
        </div>
        <div v-else class="mx-auto max-w-md mt-5 sm:flex sm:justify-center md:mt-8">
          <div class="rounded-md shadow" @click="showForm=true">
            <a href="#" class="border border-transparent rounded-md flex font-medium bg-sky-400 text-white w-full py-3 px-8 text-3xl items-center justify-center  md:py-4 md:px-10 hover:bg-sky-500 "> {{ $t('Get Started') }}</a>
          </div>
        </div>
      </div>
      <Web3NftFeatureList />
    </div>
  </main>
</template>

<route lang="yaml">
meta:
  layout: blank
</route>
