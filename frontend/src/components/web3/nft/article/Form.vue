<template>
  <DialogWide @close="$emit('close')">
    <div class="divide-y space-y-8 divide-gray-200 p-5">
      <div class="divide-y space-y-8 divide-gray-200">
        <div>
          <div class="mt-6 grid gap-y-6 gap-x-4 grid-cols-1 sm:grid-cols-6">
            <div class="sm:col-span-6">
              <label for="street-address" class="font-medium text-sm text-gray-700 block"> Title </label>
              <div class="mt-1">
                <input id="street-address" type="text" name="street-address" autocomplete="street-address" class="rounded-md border-gray-300 shadow-sm w-full block sm:text-sm focus:border-indigo-500 focus:ring-indigo-500">
              </div>
            </div>
            <div class="sm:col-span-6">
              <label for="about" class="font-medium text-sm text-gray-700 block"> Intro </label>
              <div class="mt-1">
                <textarea id="about" name="about" rows="3" class="border rounded-md border-gray-300 shadow-sm w-full p-4 block sm:text-sm focus:border-indigo-500 focus:ring-indigo-500" />
              </div>
            </div>
            <div class="sm:col-span-6">
              <label for="cover-photo" class="font-medium text-sm text-gray-700 block"> Cover photo </label>
              <div class="border-dashed rounded-md flex border-2 border-gray-300 mt-1 px-6 pt-5 pb-6 justify-center">
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

            <div class="sm:col-span-6">
              <label for="about" class="font-medium text-sm text-gray-700 block"> Content </label>
              <div class="mt-1">
                <textarea id="about" name="about" rows="20" class="border rounded-md border-gray-300 shadow-sm w-full p-4 block sm:text-sm focus:border-indigo-500 focus:ring-indigo-500" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="pt-5">
        <div class="flex justify-end">
          <button type="button" class="bg-white border rounded-md font-medium border-gray-300 shadow-sm text-sm py-2 px-4 text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" @click="$emit('close')">
            Cancel
          </button>
          <button class="border border-transparent rounded-md font-medium bg-indigo-600 shadow-sm text-sm text-white ml-3 py-2 px-4 inline-flex justify-center hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Save
          </button>
        </div>
      </div>
    </div>
  </DialogWide>
</template>
