<script setup lang="ts">
import RelationshipList from '../../../components/web3/nft/dialog/relationshipList.vue'
import { chatLink, shortAddress } from '~/helpers/web3'

const { isOwner } = $(web3Store())
const route = useRoute()
const userWalletAddress = $computed(() => route.params.userWalletAddress)

watch(
  () => route.params.userWalletAddress,
  async(address) => {
    console.log('====> address :', address)
    // userData.value = await fetchUser(newId)
  },
)

const { followers, followings, execute } = $(useIdentity($$(userWalletAddress)))
const { profile } = $(useCeramic($$(userWalletAddress)))

const links = [
  {
    name: 'My Blog Posts',
    // desc: 'Our personal website',
    type: 'blog',
    to: `/${userWalletAddress}/blog`,
  },
  {
    name: 'All my art NFT Here',
    // desc: 'Our personal website',
    type: 'art',
    to: `/${userWalletAddress}/art`,
  },
  // {
  //   name: 'All my hacker NFT Here',
  //   // desc: 'Our personal website',
  //   type: 'hacker',
  //   to: `/${userWalletAddress}/hacker`,
  // },
  {
    name: 'Web3Hacker\'s personal website',
    // desc: 'Our personal website',
    type: 'website',
    href: 'https://web3hacker.ninja',
  },
  {
    name: 'Web3Hacker\'s twitter',
    // desc: 'share our twitter',
    type: 'twitter',
    href: 'https://twitter.com/web3hacker007',
  },
  {
    name: 'Web3Hacker\'s Instagram',
    // desc: 'share our daily photo',
    type: 'instagram',
    href: 'https://instagram.com/web3hacker007',
  },
  {
    name: 'Web3Hacker\'s Facebook',
    // desc: 'share our facebook page',
    type: 'facebook',
    href: 'https://facebook.com/web3hacker007',
  },
  {
    name: 'Web3Hacker\'s OpenSea',
    // desc: 'share our NFT on OpenSea',
    type: 'opensea',
    href: 'https://opensea.io/web3hacker007',
  },
  {
    name: 'Web3Hacker\'s discord',
    // desc: 'share our NFT on discord',
    type: 'discord',
    href: 'https://discord.com/web3hacker007',
  },
  {
    name: 'Web3Hacker\'s telegram',
    // desc: 'share our NFT on telegram',
    type: 'telegram',
    href: 'https://telegram.com/web3hacker007',
  },
  // More people...
]

// use data
const isMyself = $computed(() => {
  return isOwner(userWalletAddress)
})

const isShowFollowers = $ref(false)
const isShowFollowings = $ref(false)

const doUpdate = async() => {
  console.log('====> hehe :')
  await execute({ cachePolicy: 'network-only' })
}
</script>

<template>
  <div class="w-full">
    <div>
      <div class="mt-0">
        <img class="object-cover h-80 w-full" :src="profile.banner" alt="">
      </div>
      <div class="mx-auto max-w-5xl px-10">
        <div class="-mt-12 sm:flex sm:space-x-5 sm:-mt-16 sm:items-center">
          <div class="flex">
            <!-- <img class="rounded-full h-60 ring-white ring-4 w-60 sm:h-60 sm:w-60" :src="profile.avatar" alt=""> -->
            <EthAvatar :address="userWalletAddress" class="rounded-full h-60 ring-white ring-4 w-60 sm:h-60 sm:w-60" />
          </div>
          <div class=" mt-6 sm:flex sm:space-x-6 sm:flex-1 sm:min-w-0 sm:pb-1 sm:items-center sm:justify-end">
            <div class="flex flex-row flex-1 mt-6 min-w-0 justify-between sm:hidden md:block">
              <h1 class="flex font-bold pt-10 text-2xl text-gray-900 truncate justify-start items-center">
                {{ shortAddress(userWalletAddress) }}
                <router-link v-if="isMyself" to="/settings/Web3Home" class="bg-white border rounded-md font-medium border-gray-300 shadow-sm text-sm ml-2 py-2 px-4 text-gray-700 inline-flex justify-center hover:bg-gray-50 focus:outline-none ">
                  <ci:edit class="h-5 mr-2 -ml-1 text-gray-400 w-5" aria-hidden="true" />
                  <span>Edit</span>
                </router-link>
              </h1>
              <div class="py-2 pr-10 desc">
                Web3Hacker Ninja: A group of Web3 Hacker who is working solo(with full-stack skills), Building all the good things for humans and expanding To the Mars
              </div>
              <div class="flex flex-1 h-10 py-2 justify-between items-end">
                <div>
                  <strong>16K</strong> $NTB
                </div>
                <div class="hover:cursor-pointer" @click="isShowFollowers = true">
                  <strong>{{ followers.length }}</strong> followers
                </div>
                <div class="hover:cursor-pointer" @click="isShowFollowings = true">
                  <strong>{{ followings.length }}</strong> followings
                </div>
              </div>
            </div>
            <div v-if="!isMyself" class="flex flex-row space-y-3 mt-6 justify-stretch sm:flex-row sm:space-y-0 sm:space-x-4">
              <!-- <button type="button" class="bg-white border rounded-md font-medium border-gray-300 shadow-sm text-sm py-2 px-4 text-gray-700 inline-flex justify-center hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500">
                <fluent:mail-16-filled class="h-5 mr-2 -ml-1 text-gray-400 w-5" aria-hidden="true" />
                <span>Message</span>
              </button> -->
              <a :href="chatLink(userWalletAddress)" target="_blank" class="bg-white border rounded-md font-medium border-gray-300 shadow-sm text-sm py-2 px-4 text-gray-700 items-center inline-flex justify-center hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500">
                <bi:chat class="h-5 mr-2 -ml-1 text-gray-400 w-5" aria-hidden="true" />
                <span>Chat</span>
              </a>
              <Web3NftBtnFollow :address="userWalletAddress" @update="doUpdate" />
            </div>
          </div>
        </div>
        <div class="flex-1 mt-6 min-w-0 hidden sm:block md:hidden">
          <h1 class="font-bold text-2xl text-gray-900 truncate">
            {{ profile.name }}
          </h1>
        </div>
      </div>
    </div>
    <div class="p-10">
      <div v-for="item in links" :key="item.email" class="bg-white border rounded-lg flex space-x-3 border-gray-300 shadow-sm mb-5 py-5 px-6 relative items-center hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
        <div class="flex-shrink-0">
          <akar-icons:twitter-fill v-if="item.type=== 'twitter'" class="h-10 w-10" />
          <ant-design:instagram-filled v-else-if="item.type=== 'instagram'" class="h-10 w-10" />
          <bi:book-half v-else-if="item.type=== 'blog'" class="h-10 w-10" />
          <akar-icons:facebook-fill v-else-if="item.type=== 'facebook'" class="h-10 w-10" />
          <dashicons:admin-site-alt2 v-else-if="item.type=== 'website'" class="h-10 w-10" />
          <simple-icons:opensea v-else-if="item.type=== 'opensea'" class="h-10 w-10" />
          <akar-icons:discord-fill v-else-if="item.type=== 'discord'" class="h-10 w-10" />
          <akar-icons:telegram-fill v-else-if="item.type=== 'telegram'" class="h-10 w-10" />
          <emojione-monotone:artist-palette v-else-if="item.type=== 'art'" class="h-10 w-10" />
          <ant-design:code-outlined v-else-if="item.type=== 'hacker'" class="h-10 w-10" />
          <img v-else class="rounded-full h-10 w-10" :src="item.imageUrl" alt="">
        </div>
        <div class="flex-1 min-w-0">
          <router-link v-if="item.to" :to="item.to" class="focus:outline-none">
            <span class="inset-0 absolute" aria-hidden="true" />
            <p class="font-medium text-sm text-gray-900">
              {{ item.name }}
            </p>
            <p class="text-sm text-gray-500 truncate">
              {{ item.desc }}
            </p>
          </router-link>
          <a v-else :href="item.href" class="focus:outline-none" target="_blank">
            <span class="inset-0 absolute" aria-hidden="true" />
            <p class="font-medium text-sm text-gray-900">
              {{ item.name }}
            </p>
            <p class="text-sm text-gray-500 truncate">
              {{ item.desc }}
            </p>
          </a>
        </div>
      </div>
    </div>
  </div>
  <RelationshipList :show="isShowFollowers" :items="followers" @close="isShowFollowers = false" />
  <RelationshipList :show="isShowFollowings" :items="followings" @close="isShowFollowings = false" />
</template>

<route lang="yaml">
meta:
  layout: web3nft.social
</route>
