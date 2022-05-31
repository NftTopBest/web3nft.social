<script setup lang="ts">
import { SearchIcon } from '@heroicons/vue/solid'
import { isDark, toggleDark } from '~/composables'
import { isValidateAddress } from '~/helpers/web3'

const { t, availableLocales, locale } = useI18n()

const toggleLocales = () => {
  // change to some real logic
  const locales = availableLocales
  locale.value = locales[(locales.indexOf(locale.value) + 1) % locales.length]
}

const navigation = [
  { name: 'Web3Home', href: '/' },
  // { name: 'HackerNFT', href: '/HackerNFT' },
  // { name: 'ArtistNFT', href: '/ArtistNFT' },
  // { name: 'About', href: '/about' },
]
const breadcrumbs = [
  { name: 'Web3Home', href: '/Web3Home', current: false },
  { name: 'Bruce Wayne\'s Home', href: '/Web3Home/userWalletAddress', current: false },
  { name: 'Settings', href: '/Web3Home/settings', current: true },
]

const team = [
  {
    name: 'Calvin Hawkins',
    email: 'calvin.hawkins@example.com',
    imageUrl:
      'https://images.unsplash.com/photo-1513910367299-bce8d8a0ebf6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Bessie Richards',
    email: 'bessie.richards@example.com',
    imageUrl:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Floyd Black',
    email: 'floyd.black@example.com',
    imageUrl:
      'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
]
const settings = [
  { name: 'Public access', description: 'This project would be available to anyone who has the link' },
  { name: 'Private to Project Members', description: 'Only members of this project would be able to access' },
  { name: 'Private to you', description: 'You are the only one able to access this project' },
]

const selected = ref(settings[0])
const isLogin = ref(false)
// const doConnect = async() => {
//   if (isMetaMaskInstalled()) {
//     // Request to connect to MetaMask
//     try {
//       const accounts = await window.ethereum.request({
//         method: 'eth_requestAccounts',
//       })
//       alert(`Connected with: ${accounts[0]}`)
//     }
//     catch (error) {
//       console.error(error.message)
//     }
//   }
//   else {
//     alert('Please install MetaMask.')
//   }
// }

// new code here
const $web3 = web3Store()
// console.log('====> $web3.walletAddress :', $web3.walletAddress)

const router = useRouter()
const address = $ref('')
let isShowError = $ref(false)
const go = () => {
  if (!isValidateAddress(address)) {
    // show error alert dialog
    isShowError = true
  }
  // router.push(`/${address}`)
  router.push('/0xC6E58fb4aFFB6aB8A392b7CC23CD3feF74517F6C')
}

</script>

<template>
  <Disclosure v-slot="{ open }" as="nav" class="bg-sky-500 top-0 z-10 sticky" aria-label="Global">
    <div class="mx-auto max-w-7xl px-2 2xl:px-0">
      <div class="flex h-16 justify-between">
        <!-- main nav -->
        <div class="flex px-2 items-center lg:px-0">
          <router-link to="/" class="flex flex-shrink-0 items-center">
            <img class="h-8 w-auto" src="/logo.png" alt="Workflow">
          </router-link>
          <div class="hidden lg:flex lg:space-x-4 lg:ml-8">
            <router-link v-for="item in navigation" :key="item.name" :to="item.href" class="rounded-md font-medium text-sm text-white py-2 px-3 hover:bg-sky-400">
              {{ item.name }}
            </router-link>
          </div>
        </div>
        <!-- search form -->
        <div class="flex flex-1 px-2 items-center justify-center lg:ml-6 lg:justify-end">
          <div class="max-w-lg w-full lg:max-w-xs">
            <label for="search" class="sr-only">Search</label>
            <div class="text-white relative focus-within:text-gray-400">
              <div class="flex pl-3 inset-y-0 left-0 absolute items-center pointer-events-none">
                <akar-icons:search class="flex-shrink-0 h-5 w-5" aria-hidden="true" />
              </div>
              <input id="search" v-model="address" name="search" class="border-transparent rounded-md bg-sky-400 placeholder-white text-base w-full py-2 pr-3 pl-10 leading-5 block sm:text-sm focus:bg-white focus:border-white focus:outline-none focus:placeholder-gray-400 focus:ring-0 focus:text-gray-900" placeholder="Search" type="search" @keyup.enter.native="go">
            </div>
          </div>
          <DialogDefault :show="isShowError" @close="isShowError=false">
            {{ address }} address not validate
          </DialogDefault>
        </div>
        <div class="flex items-center lg:hidden">
          <!-- Mobile menu button -->
          <DisclosureButton class="rounded-md p-2 text-sky-200 inline-flex items-center justify-center hover:bg-sky-400 hover:text-white focus:outline-none focus:ring-inset focus:ring-white focus:ring-2">
            <span class="sr-only">Open menu</span>
            <dashicons:menu-alt v-if="!open" class="h-6 w-6 block" aria-hidden="true" />
            <ep:close-bold v-else class="h-6 w-6 block" aria-hidden="true" />
          </DisclosureButton>
        </div>
        <Web3NftAccountContentPC v-if="$web3.walletAddress" />
        <Web3NftAccountLoginBtnPC v-else />
      </div>
    </div>

    <DisclosurePanel class="lg:hidden">
      <div class="space-y-1 px-2 pt-2 pb-3">
        <DisclosureButton v-for="item in navigation" :key="item.name" as="a" :href="item.href" class="rounded-md font-medium text-base text-white py-2 px-3 block hover:bg-sky-400 hover:text-white">
          {{ item.name }}
        </DisclosureButton>
      </div>
      <Web3NftAccountContentMobile v-if="$web3.walletAddress" />
      <Web3NftAccountLoginBtnMobile v-else />
    </DisclosurePanel>
  </Disclosure>

  <!-- Breadcrumb -->
  <nav v-if="false" class="bg-white border-b border-gray-200 top-16 z-9 hidden sticky lg:flex" aria-label="Breadcrumb">
    <ol role="list" class="flex mx-auto space-x-4 w-full max-w-7xl px-4 sm:px-6 lg:px-8">
      <li class="flex">
        <div class="flex items-center">
          <router-link to="/" class="text-gray-400 hover:text-gray-500">
            <ant-design:home-filled class="flex-shrink-0 h-5 w-5" aria-hidden="true" />
            <span class="sr-only">Home</span>
          </router-link>
        </div>
      </li>
      <li v-for="item in breadcrumbs" :key="item.name" class="flex">
        <div class="flex items-center">
          <svg class="h-full flex-shrink-0 text-gray-200 w-6" preserveAspectRatio="none" viewBox="0 0 24 44" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M.293 0l22 22-22 22h1.414l22-22-22-22H.293z" />
          </svg>
          <router-link :to="item.href" class="font-medium text-sm ml-4 text-gray-500 hover:text-gray-700" :aria-current="item.current ? 'page' : undefined">
            {{ item.name }}
          </router-link>
        </div>
      </li>
    </ol>
  </nav>
</template>
