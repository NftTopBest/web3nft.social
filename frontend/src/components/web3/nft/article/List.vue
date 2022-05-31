<template>
  <div class="bg-gray-50 px-4 pt-16 pb-20 relative sm:px-6 lg:px-8 lg:pt-24 lg:pb-28">
    <div class="inset-0 absolute">
      <div class="bg-white h-1/3 sm:h-2/3" />
    </div>
    <div class="mx-auto max-w-7xl relative">
      <button class="rounded-full bg-red-500 border-1 text-white py-4 px-10 -top-20 right-1 absolute" @click="isShowPostNew = true">
        Post New
      </button>
      <div class="text-center">
        <h2 class="font-extrabold tracking-tight text-3xl text-gray-900 sm:text-4xl">
          From the blog
        </h2>
        <p class="mx-auto mt-3 text-xl max-w-2xl text-gray-500 sm:mt-4">
          All the thoughts for the Web3.
        </p>
      </div>
      <div class="mx-auto max-w-lg mt-12 grid gap-5 lg:max-w-none lg:grid-cols-3">
        <div v-for="post in posts" :key="post.title" class="rounded-lg flex flex-col shadow-lg overflow-hidden">
          <div class="flex-shrink-0">
            <img class="object-cover h-48 w-full" :src="post.imageUrl" alt="">
          </div>
          <div class="bg-white flex flex-col flex-1 p-6 justify-between">
            <div class="flex-1">
              <!-- <p class="font-medium text-sm text-indigo-600">
                <a :href="post.category.href" class="hover:underline">
                  {{ post.category.name }}
                </a>
              </p> -->
              <router-link :to="articleLink(post)" class="mt-2 block">
                <p class="font-semibold text-xl text-gray-900">
                  {{ post.title }}
                </p>
                <p class="mt-3 text-base text-gray-500">
                  {{ post.description }}
                </p>
              </router-link>
            </div>
            <div class="flex mt-6 items-center hidden">
              <div class="flex-shrink-0">
                <a :href="post.author.href">
                  <span class="sr-only">{{ post.author.name }}</span>
                  <img class="rounded-full h-10 w-10" :src="post.author.imageUrl" alt="">
                </a>
              </div>
              <div class="ml-3">
                <p class="font-medium text-sm text-gray-900">
                  <a :href="post.author.href" class="hover:underline">
                    {{ post.author.name }}
                  </a>
                </p>
                <div class="flex space-x-1 text-sm text-gray-500">
                  <time :datetime="post.datetime">
                    {{ post.date }}
                  </time>
                  <span aria-hidden="true"> &middot; </span>
                  <span> {{ post.readingTime }} read </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Web3NftArticleForm :show="isShowPostNew" @close="isShowPostNew=false" />
</template>

<script setup lang="ts">
const route = useRoute()
const userWalletAddress = $computed(() => route.params.userWalletAddress)

const articleLink = (item) => {
  return `/${userWalletAddress}/blog/s8QSZG-STuW5getG7QVG2R3RDbja7KlaMfg6nDeuviQ`
}
const posts = [
  {
    title: 'Boost your conversion rate',
    href: '#',
    category: { name: 'Article', href: '#' },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    imageUrl:
      'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    readingTime: '6 min',
    author: {
      name: 'Roel Aufderehar',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    title: 'How to use search engine optimization to drive sales',
    href: '#',
    category: { name: 'Video', href: '#' },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.',
    date: 'Mar 10, 2020',
    datetime: '2020-03-10',
    imageUrl:
      'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    readingTime: '4 min',
    author: {
      name: 'Brenna Goyette',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    title: 'Improve your customer experience',
    href: '#',
    category: { name: 'Case Study', href: '#' },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.',
    date: 'Feb 12, 2020',
    datetime: '2020-02-12',
    imageUrl:
      'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    readingTime: '11 min',
    author: {
      name: 'Daniela Metz',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
]

const isShowPostNew = $ref(false)
</script>
