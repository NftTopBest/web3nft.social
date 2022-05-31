<script setup lang="ts">

const route = useRoute()

const tokenUrl = (item) => {
  return `/${route.params.chainId}/${route.params.address}/${item}`
}

const isOwner = ref(true)

</script>

<template>
  <div class="mx-auto w-250">
    <!-- header -->
    <div class="border-b flex py-10 justify-start">
      <!-- avatar -->
      <div class="flex w-84 justify-center ">
        <img src="https://pbs.twimg.com/profile_images/1524962654510620684/X7oh9xcV_400x400.png" class=" rounded-full  h-40 w-40 ">
      </div>
      <div class="flex-1 w-full">
        <div class="flex mb-5 name-action">
          <div class="mr-4 text-3xl name">
            Web3Hacker
          </div>
          <div class="flex  flex-1 action justify-between">
            <div>
              <router-link v-if="isOwner" to="/settings/ArtistNFT" class="bg-white border rounded-md font-medium border-gray-300 shadow-sm text-sm py-2 px-4 text-gray-700 inline-flex justify-center hover:bg-gray-50 focus:outline-none ">
                <ci:edit class="h-5 mr-2 -ml-1 text-gray-400 w-5" aria-hidden="true" />
                <span>Edit</span>
              </router-link>
            </div>
            <div>
              <button type="button" class="bg-white border rounded font-medium border-gray-300 shadow-sm text-xs mr-2 py-1.5 px-2.5 text-gray-700 inline-flex items-center hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Message
              </button>
              <button type="button" class="border border-transparent rounded font-medium bg-sky-500 shadow-sm mr-2 text-xs text-white py-1.5 px-2.5 inline-flex items-center hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Follow
              </button>
            </div>
          </div>
        </div>
        <div class="flex w-80 meta justify-between">
          <div>
            <strong>10k</strong> Items
          </div>
          <div>
            <strong>1</strong> followers
          </div>
          <div>
            <strong>1</strong> followings
          </div>
        </div>
        <div class="py-2 desc">
          Welcome to the wanderfull playground of Web3NFT Social space. A collection of 5,555 toys to adopt. Created by Web3Hacker
        </div>
      </div>
    </div>
    <!-- list -->
    <div class="flex flex-wrap pt-10 justify-between">
      <router-link v-for="item in 6" :key="item" :to="tokenUrl(item)" class=" mb-5 w-80">
        <img :src="`/tmp/${item}.jpg`" class="object-cover h-80 w-80">
      </router-link>
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: web3nft.social
</route>
