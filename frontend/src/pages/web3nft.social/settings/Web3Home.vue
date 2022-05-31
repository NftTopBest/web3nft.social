<script setup lang="ts">
import { Integration } from 'lit-ceramic-sdk'
import { twitterAuthorize, twitterVerify } from '@cyberlab/social-verifier'

const { profile, updateProfile } = $(ceramicStore())
const { walletAddress } = $(web3Store())

const chain = 'mumbai'
const litCeramicIntegration = new Integration('https://ceramic-clay.3boxlabs.com', chain)

const saveDataToCeramic = async() => {
  const accessControlConditions = [
    {
      contractAddress: '0xc0ad7861fe8848002a3d9530999dd29f6b6cae75',
      standardContractType: 'ERC20',
      chain,
      method: 'balanceOf',
      parameters: [
        ':userAddress',
      ],
      returnValueTest: {
        comparator: '>',
        value: '0',
      },
    },
  ]
  const stringToEncrypt = 'This is what we want to encrypt on Lit and then store on ceramic'
  const streamID = await litCeramicIntegration
    .encryptAndWrite(stringToEncrypt, accessControlConditions)
  console.log('====> streamID :', streamID)
}

const allowCommenting = ref(true)
const allowMentions = ref(true)

// const twitterHandle = ref('')
// const doTwittWithSign = async() => {
//   if (!twitterHandle.value) return

//   const sig = await twitterAuthorize(provider, walletAddress, profile.twitter)
//   const message = `Verifying my Web3 identity on @Web3HackerNinja on DApp Web3NFT.Social: ${sig}`
//   window.open(`https://twitter.com/intent/tweet?text=${message}`, '_blank')
// }
// const doVerifyTwitter = async() => {
//   if (!twitterHandle.value) return
//   try {
//     await twitterVerify(walletAddress, profile.twitter)
//   }
//   catch (error) {
//     console.log('====> error :', error.message)
//     console.error(error.message)
//   }
// }

const previewLink = $computed(() => `${location.protocol}//${location.host}/${walletAddress}`)

</script>

<template>
  <div class="mx-auto mt-10 max-w-4xl">
    <div class="bg-white rounded-lg shadow overflow-hidden">
      <div class="divide-y divide-gray-200 lg:divide-x lg:divide-y-0 lg:grid lg:grid-cols-9">
        <!-- <Web3NftSettingsAside /> -->

        <div class="divide-y divide-gray-200 lg:col-span-9">
          <div class="py-6 px-4 sm:p-10 lg:pb-8">
            <!-- {{ profile }} -->
            <div>
              <h2 class="flex font-medium text-lg w-full text-gray-900 leading-6 justify-between">
                Web3Home Settings
                <!-- <a :href="previewLink" class="flex text-green-500 items-center">
                  Check it now
                  <akar-icons:link-out
                    class="h-5 ml-2 w-5"
                  /></a> -->
                <router-link :to="`/${walletAddress}`" class="flex text-green-500 items-center">
                  Check it now
                  <akar-icons:link-out
                    class="h-5 ml-2 w-5"
                  />
                </router-link>
              </h2>
              <p class="mt-1 text-sm text-gray-500">
                This information will be displayed publicly so be careful what you share.
              </p>
            </div>

            <div class="mt-6 grid gap-6 grid-cols-12">
              <div class="col-span-12 sm:col-span-6">
                <label for="firstname" class="font-medium text-sm text-gray-700 block">First Name</label>
                <input id="firstname" v-model="profile.firstname" type="text" name="firstname" autocomplete="firstname" class="border rounded-md border-gray-300 shadow-sm mt-1 w-full py-2 px-3 block sm:text-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500">
              </div>

              <div class="col-span-12 sm:col-span-6">
                <label for="lastname" class="font-medium text-sm text-gray-700 block">Last name</label>
                <input id="lastname" v-model="profile.lastname" type="text" name="lastname" autocomplete="lastname" class="border rounded-md border-gray-300 shadow-sm mt-1 w-full py-2 px-3 block sm:text-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500">
              </div>
            </div>
            <div class="flex flex-col mt-6 lg:flex-row">
              <div class="flex-grow space-y-6">
                <div>
                  <label for="about" class="font-medium text-sm text-gray-700 block"> About </label>
                  <div class="mt-1">
                    <textarea id="about" v-model="profile.bio" name="about" rows="3" class="border rounded-md border-gray-300 shadow-sm mt-1 p-2 w-4/5 block sm:text-sm focus:border-sky-500 focus:ring-sky-500" />
                  </div>
                  <p class="mt-2 text-sm text-gray-500">
                    Brief description for your profile. URLs are hyperlinked.
                  </p>
                </div>
              </div>

              <div v-if="false" class="flex-grow mt-6 lg:flex-grow-0 lg:flex-shrink-0 lg:mt-0 lg:ml-6">
                <p class="font-medium text-sm text-gray-700" aria-hidden="true">
                  Photo
                </p>
                <div class="mt-1 lg:hidden">
                  <div class="flex items-center">
                    <div class="rounded-full flex-shrink-0 h-12 w-12 inline-block overflow-hidden" aria-hidden="true">
                      <img class="rounded-full h-full w-full" :src="profile.avatar" alt="">
                    </div>
                    <div class="rounded-md shadow-sm ml-5">
                      <div class="border rounded-md flex border-gray-300 py-2 px-3 group relative items-center justify-center hover:bg-gray-50 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-sky-500">
                        <label for="mobile-user-photo" class="font-medium text-sm text-gray-700 leading-4 relative pointer-events-none">
                          <span>Change</span>
                          <span class="sr-only"> user photo</span>
                        </label>
                        <input id="mobile-user-photo" name="user-photo" type="file" class="rounded-md cursor-pointer h-full border-gray-300 w-full opacity-0 absolute">
                      </div>
                    </div>
                  </div>
                </div>

                <div class="rounded-full hidden relative overflow-hidden lg:block">
                  <img class="rounded-full h-40 w-40 relative" :src="profile.avatar" alt="">
                  <label for="desktop-user-photo" class="bg-black flex font-medium h-full bg-opacity-75 text-sm text-white w-full opacity-0 inset-0 absolute items-center justify-center hover:opacity-100 focus-within:opacity-100">
                    <span>Change</span>
                    <span class="sr-only"> user photo</span>
                    <input id="desktop-user-photo" type="file" name="user-photo" class="rounded-md cursor-pointer h-full border-gray-300 w-full opacity-0 inset-0 absolute">
                  </label>
                </div>
              </div>
            </div>

            <!-- <div class="sm:border-gray-200 sm:grid sm:pt-5 sm:gap-4 sm:grid-cols-3 sm:items-start">
              <label for="cover-photo" class="font-medium text-sm text-gray-700 block sm:mt-px sm:pt-2"> Cover photo </label>
              <div class="mt-1 sm:mt-0 sm:col-span-2">
                <div class="border-dashed rounded-md flex max-w-lg border-2 border-gray-300 px-6 pt-5 pb-6 justify-center">
                  <div class="space-y-1 text-center">
                    <svg class="mx-auto h-12 text-gray-400 w-12" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                      <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <div class="flex text-sm text-gray-600">
                      <label for="file-upload" class="bg-white rounded-md cursor-pointer font-medium text-indigo-600 relative hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                        <span>Upload a file</span>
                        <input id="file-upload" name="file-upload" type="file" class="sr-only">
                      </label>
                      <p class="pl-1">
                        or drag and drop
                      </p>
                    </div>
                    <p class="text-xs text-gray-500">
                      PNG, JPG, GIF up to 10MB
                    </p>
                  </div>
                </div>
              </div>
            </div> -->
          </div>

          <!-- <div class="divide-y divide-gray-200 pt-6">
            <div class="px-4 sm:px-10">
              <div>
                <h2 class="font-medium text-lg text-gray-900 leading-6">
                  Privacy
                </h2>
                <p class="mt-1 text-sm text-gray-500" />
              </div>

              <ul role="list" class="divide-y divide-gray-200 mt-2">
                <SwitchGroup as="li" class="flex py-4 items-center justify-between">
                  <div class="flex flex-col">
                    <SwitchLabel as="p" class="font-medium text-sm text-gray-900" passive>
                      Allow commenting
                    </SwitchLabel>
                    <SwitchDescription class="text-sm text-gray-500">
                      Allow commenting on your links?
                    </SwitchDescription>
                  </div>
                  <Switch v-model="allowCommenting" :class="[allowCommenting ? 'bg-teal-500' : 'bg-gray-200', 'ml-4 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500']">
                    <span aria-hidden="true" :class="[allowCommenting ? 'translate-x-5' : 'translate-x-0', 'inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200']" />
                  </Switch>
                </SwitchGroup>
                <SwitchGroup as="li" class="flex py-4 items-center justify-between">
                  <div class="flex flex-col">
                    <SwitchLabel as="p" class="font-medium text-sm text-gray-900" passive>
                      Allow message
                    </SwitchLabel>
                    <SwitchDescription class="text-sm text-gray-500" />
                  </div>
                  <Switch v-model="allowMentions" :class="[allowMentions ? 'bg-teal-500' : 'bg-gray-200', 'ml-4 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500']">
                    <span aria-hidden="true" :class="[allowMentions ? 'translate-x-5' : 'translate-x-0', 'inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200']" />
                  </Switch>
                </SwitchGroup>
              </ul>
            </div>
          </div> -->

          <div class="divide-y divide-gray-200 pt-6">
            <div class="px-4 sm:px-10">
              <div>
                <h2 class="font-medium text-lg text-gray-900 leading-6">
                  Social Links
                </h2>
                <p class="mt-1 text-sm text-gray-500" />
              </div>

              <ul role="list" class="divide-y divide-gray-200 mt-2">
                <SwitchGroup v-for="item in CERAMIC_profileFields" :key="item.name" as="li" class="flex py-4 items-center justify-between">
                  <div class="flex flex-col flex-1 pr-10">
                    <SwitchLabel as="p" class="font-medium text-sm mb-1 text-gray-900" passive>
                      {{ item.label }}
                    </SwitchLabel>
                    <SwitchDescription class="flex-1 text-sm grid text-gray-500 gap-y-6 grid-cols-1 sm:gap-x-9 sm:grid-cols-9">
                      <template v-if="item.name ==='twitter222'">
                        <div class="sm:col-span-3">
                          <label for="twitter-handle" class="font-medium text-sm text-blue-gray-900 block">Twitter Handle </label>
                          <input id="twitter-handle" v-model="profile.twitter" type="text" autocomplete="twitter" class="rounded-md border-blue-gray-300 shadow-sm mt-1 w-full text-blue-gray-900 block sm:text-sm focus:border-blue-500 focus:ring-blue-500">
                        </div>
                        <!-- <div v-if="false" class="sm:col-span-3">
                          <label for="phone-number" class="font-medium text-sm text-blue-gray-900 block">&nbsp;&nbsp; </label>
                          <button type="button" class="border rounded-md font-medium bg-sky-500 border-sky-300 shadow-sm mt-1 text-sm text-white  py-2 px-4  inline-flex justify-center  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 disabled:cursor-not-allowed disabled:bg-gray-400 disabled:text-white" :disabled="twitterHandle === ''" @click="doTwittWithSign">
                            Start Verify
                          </button>
                          <button type="button" class="border rounded-md font-medium bg-sky-500 border-sky-300 shadow-sm mt-1 text-sm text-white  py-2 px-4  inline-flex justify-center  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 disabled:cursor-not-allowed disabled:bg-gray-400 disabled:text-white" :disabled="twitterHandle === ''" @click="doVerifyTwitter">
                            Check Verify Result
                          </button>
                        </div> -->
                      </template>
                      <template v-else>
                        <div class="sm:col-span-3">
                          <label :for="`${item.name}Title`" class="font-medium text-sm text-blue-gray-900 block">Title </label>
                          <input :id="`${item.name}Title`" v-model="profile[`${item.name}Title`]" type="text" :name="`${item.name}Title`" :autocomplete="`${item.name}Title`" class="rounded-md border-blue-gray-300 shadow-sm mt-1 w-full text-blue-gray-900 block sm:text-sm focus:border-blue-500 focus:ring-blue-500">
                        </div>
                        <div class="sm:col-span-6">
                          <label :for="item.name" class="font-medium text-sm text-blue-gray-900 block"> URL </label>
                          <div class="rounded-md flex shadow-sm mt-1">
                            <span class="border rounded-l-md bg-gray-50 border-r-0 border-gray-300 text-sm px-3 text-gray-500 inline-flex items-center"> https:// </span>
                            <input :id="item.name" v-model="profile[item.name]" type="text" :name="item.name" class="rounded-none rounded-r-md border-gray-300 flex-1 w-full block sm:text-sm focus:border-indigo-500 focus:ring-indigo-500">
                          </div>
                        </div>
                      </template>
                    </SwitchDescription>
                  </div>
                  <!-- <Switch v-model="item.isShow" :class="[item.isShow ? 'bg-teal-500' : 'bg-gray-200', 'ml-4 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500']">
                    <span aria-hidden="true" :class="[item.isShow ? 'translate-x-5' : 'translate-x-0', 'inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200']" />
                  </Switch> -->
                </SwitchGroup>
              </ul>
            </div>
            <div class="flex mt-4 py-4 px-4 justify-end sm:px-6">
              <button type="button" class="bg-white border rounded-md font-medium border-gray-300 shadow-sm text-sm py-2 px-4 text-gray-700 inline-flex justify-center hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500">
                Cancel
              </button>
              <button class="border border-transparent rounded-md font-medium bg-sky-500 shadow-sm text-sm text-white ml-5 py-2 px-4 inline-flex justify-center hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500" @click="updateProfile">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: web3nft.social
</route>
