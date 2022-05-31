<script setup lang="ts">

const user = {
  name: 'Debbie Lewis',
  handle: 'deblewis',
  email: 'debbielewis@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=320&h=320&q=80',
}

const items = ref([
  { name: 'website', label: 'Website', url: '', placeholder: 'example.com', isShow: true },
  { name: 'github', label: 'Github', url: '', placeholder: 'example.com', isShow: true },
  { name: 'reddit', label: 'Reddit', url: '', placeholder: 'example.com', isShow: true },
  { name: 'twitter', label: 'Twitter', url: '', placeholder: 'twitter.com/your-user-name', isShow: true },
  { name: 'weibo', label: 'Weibo', url: '', placeholder: 'example.com', isShow: true },
  { name: 'instagram', label: 'Instagram', url: '', placeholder: 'instagram.com/your-user-name', isShow: true },
  { name: 'facebook', label: 'Facebook', url: '', placeholder: 'facebook.com/your-user-name', isShow: true },
  { name: 'opensea', label: 'OpenSea', url: '', placeholder: 'opensea.com/your-collection-path', isShow: true },
  { name: 'discord', label: 'Discord', url: '', placeholder: 'discord.com/your-guild-id', isShow: true },
  { name: 'telegram', label: 'Telegram', url: '', placeholder: 'telegram.com/your-user-name', isShow: true },
])

const allowCommenting = ref(true)
const allowMentions = ref(true)
</script>

<template>
  <div class="mx-full mt-10">
    <div class="bg-white rounded-lg shadow overflow-hidden">
      <div class="divide-y divide-gray-200 lg:divide-x lg:divide-y-0 lg:grid lg:grid-cols-12">
        <Web3NftSettingsAside />

        <form class="divide-y divide-gray-200 lg:col-span-9" action="#" method="POST">
          <div class="py-6 px-4 sm:p-10 lg:pb-8">
            <div>
              <h2 class="font-medium text-lg text-gray-900 leading-6">
                Artist Settings
              </h2>
              <p class="mt-1 text-sm text-gray-500" />
            </div>

            <div class="mt-6 grid gap-6 grid-cols-12">
              <div class="col-span-12 sm:col-span-6">
                <label for="first-name" class="font-medium text-sm text-gray-700 block">First name</label>
                <input id="first-name" type="text" name="first-name" autocomplete="given-name" class="border rounded-md border-gray-300 shadow-sm mt-1 w-full py-2 px-3 block sm:text-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500">
              </div>

              <div class="col-span-12 sm:col-span-6">
                <label for="last-name" class="font-medium text-sm text-gray-700 block">Last name</label>
                <input id="last-name" type="text" name="last-name" autocomplete="family-name" class="border rounded-md border-gray-300 shadow-sm mt-1 w-full py-2 px-3 block sm:text-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500">
              </div>
            </div>
            <div class="flex flex-col mt-6 lg:flex-row">
              <div class="flex-grow space-y-6">
                <div class="hidden">
                  <label for="username" class="font-medium text-sm text-gray-700 block"> Username </label>
                  <div class="rounded-md flex shadow-sm mt-1">
                    <span class="border rounded-l-md bg-gray-50 border-r-0 border-gray-300 px-3 text-gray-500 inline-flex items-center sm:text-sm"> web3nft.social/ </span>
                    <input id="username" type="text" name="username" autocomplete="username" class="rounded-none rounded-r-md flex-grow border-gray-300 w-full min-w-0 block sm:text-sm focus:border-sky-500 focus:ring-sky-500" :value="user.handle">
                  </div>
                </div>

                <div>
                  <label for="about" class="font-medium text-sm text-gray-700 block"> About </label>
                  <div class="mt-1">
                    <textarea id="about" name="about" rows="3" class="border rounded-md border-gray-300 shadow-sm mt-1 w-full block sm:text-sm focus:border-sky-500 focus:ring-sky-500" />
                  </div>
                  <p class="mt-2 text-sm text-gray-500">
                    Brief description for your profile. URLs are hyperlinked.
                  </p>
                </div>
              </div>

              <div class="flex-grow mt-6 lg:flex-grow-0 lg:flex-shrink-0 lg:mt-0 lg:ml-6">
                <p class="font-medium text-sm text-gray-700" aria-hidden="true">
                  Photo
                </p>
                <div class="mt-1 lg:hidden">
                  <div class="flex items-center">
                    <div class="rounded-full flex-shrink-0 h-12 w-12 inline-block overflow-hidden" aria-hidden="true">
                      <img class="rounded-full h-full w-full" :src="user.imageUrl" alt="">
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
                  <img class="rounded-full h-40 w-40 relative" :src="user.imageUrl" alt="">
                  <label for="desktop-user-photo" class="bg-black flex font-medium h-full bg-opacity-75 text-sm text-white w-full opacity-0 inset-0 absolute items-center justify-center hover:opacity-100 focus-within:opacity-100">
                    <span>Change</span>
                    <span class="sr-only"> user photo</span>
                    <input id="desktop-user-photo" type="file" name="user-photo" class="rounded-md cursor-pointer h-full border-gray-300 w-full opacity-0 inset-0 absolute">
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div class="divide-y divide-gray-200 pt-6">
            <div class="flex mt-4 py-4 px-4 justify-end sm:px-6">
              <button type="button" class="bg-white border rounded-md font-medium border-gray-300 shadow-sm text-sm py-2 px-4 text-gray-700 inline-flex justify-center hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500">
                Cancel
              </button>
              <button type="submit" class="border border-transparent rounded-md font-medium bg-sky-700 shadow-sm text-sm text-white ml-5 py-2 px-4 inline-flex justify-center hover:bg-sky-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500">
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: web3nft.social
</route>
