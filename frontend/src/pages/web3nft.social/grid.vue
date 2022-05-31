<script setup lang="ts">
const items = [
]
for (let i = 0; i < 25; i++) {
  items.push({
    title: 'IMG_4985.HEIC',
    link: '/userWalletAddress',
    size: '3.9 MB',
    source:
      'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
  })
  // items.push({
  //   title: 'IMG_4985.HEIC',
  //   size: '3.9 MB',
  //   source:
  //     'https://images.unsplash.com/photo-1652990972729-d2f9b4ad5eda?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=512',
  // })
  // items.push({
  //   title: 'Bruce Wayne',
  //   size: 'A Web3 Hacker',
  //   source:
  //     'https://images.unsplash.com/photo-1653055265734-ec985e978cf1?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=512',
  // })
  // items.push({
  //   title: 'IMG_4985.HEIC',
  //   size: '3.9 MB',
  //   source:
  //     'https://images.unsplash.com/photo-1653025464240-689d8e10d75b?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=512',
  // })
}
</script>

<template>
  <ul role="list" class="grid p-4 gap-x-4 gap-y-8 grid-cols-2 sm:(gap-x-6 grid-cols-3 p-6) lg:grid-cols-4 xl:gap-x-8 ">
    <router-link v-for="item in items" :key="item.source" as="li" :to="item.link" class="relative">
      <div class="rounded-lg bg-gray-100 w-full group block overflow-hidden aspect-w-10 aspect-h-7 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500">
        <img :src="item.source" alt="" class="object-cover pointer-events-none group-hover:opacity-75">
        <button type="button" class="inset-0 absolute focus:outline-none">
          <span class="sr-only">View details for {{ item.title }}</span>
        </button>
      </div>
      <p class="font-medium mt-2 text-sm text-gray-900 block truncate pointer-events-none">
        {{ item.title }}
      </p>
      <p class="font-medium text-sm text-gray-500 block pointer-events-none">
        {{ item.size }}
      </p>
    </router-link>
  </ul>
</template>

<route lang="yaml">
meta:
  layout: web3nft.social
</route>
