<script setup lang="ts">
import { CheckCircleIcon, ShieldCheckIcon } from '@heroicons/vue/outline'
import { XIcon } from '@heroicons/vue/solid'
const { isShow, message } = $(notificationStore())
</script>

<template>
  <!-- Global notification live region, render this permanently at the end of the document -->
  <div aria-live="assertive" class="flex py-6 px-4 top-16 right-0 w-100 z-20 fixed items-end pointer-events-none sm:p-6 sm:items-start">
    <div class="flex flex-col space-y-4 w-full items-center sm:items-end">
      <!-- Notification panel, dynamically insert this into the live region when it needs to be displayed -->
      <transition enter-active-class="transform ease-out duration-300 transition" enter-from-class="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2" enter-to-class="translate-y-0 opacity-100 sm:translate-x-0" leave-active-class="transition ease-in duration-100" leave-from-class="opacity-100" leave-to-class="opacity-0">
        <div v-if="isShow && message" class="bg-white rounded-lg max-w-sm  shadow-lg ring-black w-full ring-1 ring-opacity-5 z-50 pointer-events-auto overflow-hidden">
          <div class="p-4">
            <div class="flex items-start">
              <div class="flex-shrink-0">
                <ShieldCheckIcon v-if="message.isError" class="h-6 text-green-400 w-6" aria-hidden="true" />
                <CheckCircleIcon v-else class="h-6 text-green-400 w-6" aria-hidden="true" />
              </div>
              <div class="flex-1 ml-3 pt-0.5 w-0">
                <p class="font-medium text-sm text-gray-900">
                  {{ message.title }}
                </p>
              </div>
              <div class="flex flex-shrink-0 ml-4">
                <button type="button" class="bg-white rounded-md text-gray-400 inline-flex hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" @click="isShow = false">
                  <span class="sr-only">Close</span>
                  <XIcon class="h-5 w-5" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>
