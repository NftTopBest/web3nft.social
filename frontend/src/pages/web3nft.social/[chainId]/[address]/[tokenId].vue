<script setup lang="ts">
// import { XIcon } from '@heroicons/vue/outline'
const route = useRoute()
const tokenId = route.params.tokenId
const product = ref({
  name: '',
  price: '',
  rating: 0,
  reviewCount: 0,
  href: '#',
  imageSrc: `/tmp/${tokenId % 4}.jpg`,
  imageAlt: 'Two each of gray, white, and black shirts arranged on table.',
  colors: [
    { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
    { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
    { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
  ],
  attrs: [
    { name: 'XXS', inStock: true },
    { name: 'XS', inStock: true },
    { name: 'S', inStock: true },
    { name: 'M', inStock: true },
    { name: 'L', inStock: true },
    { name: 'XL', inStock: true },
    { name: 'XXL', inStock: true },
    { name: 'XXXL', inStock: false },
  ],
})
const options = {
  address: '0x7de3085b3190b3a787822ee16f23be010f5f8686',
  token_id: '1',
  chain: 'eth',
}

async function fetchIPFSDoc(ipfsHash) {
  const url = `https://gateway.moralisipfs.com/ipfs/${ipfsHash}`
  const response = await fetch(url)
  return await response.json()
}
const getTokenData = async() => {
  const rz = await Moralis.Web3API.token.getTokenIdMetadata(options)
  product.value.symbol = rz.symbol
  product.value.contract_type = rz.contract_type
  product.value.owner_of = rz.owner_of
  const { token_uri } = rz
  const ipfsHash = token_uri.replace('https://ipfs.moralis.io:2053/ipfs/', '')
  const rz2 = await fetchIPFSDoc(ipfsHash)
  console.log('====> rz2 :', rz, rz2)
  const { image } = rz2
  product.value.image = image.replace('ipfs://', 'https://gateway.moralisipfs.com/ipfs/')
  product.value.name = rz2.name
  product.value.artist = rz2.artist
  product.value.attrs = rz2.attributes
}
getTokenData()

// mock data
const selectedColor = ref(product.value.colors[0])
const selectedSize = ref(product.value.attrs[2])

const tokenUrl = (item) => {
  return `/${route.params.chainId}/${route.params.address}/${item}`
}
const contractUrl = computed(() => `/${route.params.chainId}/${route.params.address}`)

const imgSrc = (item) => {
  const val = parseInt(Math.random() * 100 % 4 + 1)
  return `/tmp/${val}.jpg`
}
</script>

<template>
  <div class="border-b-1 mb-10 w-full grid p-10 gap-y-8 gap-x-6 grid-cols-1 items-start sm:grid-cols-12 lg:gap-x-8">
    <div class="rounded-lg h-full bg-gray-100 overflow-hidden aspect-w-2 aspect-h-3 sm:col-span-4 lg:col-span-5">
      <img :src="product.image" class="h-full object-center object-cover w-full">
    </div>
    <div class="sm:col-span-8 lg:col-span-7">
      <h2 class="font-extrabold text-2xl text-gray-900 sm:pr-12">
        {{ product.name }}
      </h2>

      <section aria-labelledby="information-heading" class="mt-2">
        <h3 id="information-heading" class="sr-only">
          information
        </h3>

        <p class="text-2xl text-gray-900">
          {{ product.symbol }}
        </p>

        <!-- Reviews -->
        <div class="mt-6">
          <h4 class="sr-only">
            Reviews
          </h4>
          <div class="flex items-center">
            <div class="flex items-center">
              <!-- <StarIcon v-for="rating in [0, 1, 2, 3, 4]" :key="rating" :class="[product.rating > rating ? 'text-gray-900' : 'text-gray-200', 'h-5 w-5 flex-shrink-0']" aria-hidden="true" /> -->
            </div>
            <p class="sr-only">
              {{ product.rating }} out of 5 stars
            </p>
            <a href="#" class="font-medium text-sm ml-3 text-indigo-600 hover:text-indigo-500">{{ product.reviewCount }} reviews</a>
          </div>
        </div>
      </section>

      <section aria-labelledby="options-heading" class="mt-10">
        <h3 id="options-heading" class="sr-only">
          Product options
        </h3>

        <form>
          <div class="border-t border-gray-200 mt-10">
            <dl>
              <div class="bg-gray-50 py-5 px-4 sm:grid sm:px-6 sm:gap-4 sm:grid-cols-3">
                <dt class="font-medium text-sm text-gray-500">
                  Owner Of
                </dt>
                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {{ product.owner_of }}
                </dd>
              </div>
              <div class="bg-white py-5 px-4 sm:grid sm:px-6 sm:gap-4 sm:grid-cols-3">
                <dt class="font-medium text-sm text-gray-500">
                  Contract Type
                </dt>
                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {{ product.contract_type }}
                </dd>
              </div>
              <div class="bg-gray-50 py-5 px-4 sm:grid sm:px-6 sm:gap-4 sm:grid-cols-3">
                <dt class="font-medium text-sm text-gray-500">
                  Artist
                </dt>
                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {{ product.artist }}
                </dd>
              </div>
              <div class="bg-white py-5 px-4 sm:grid sm:px-6 sm:gap-4 sm:grid-cols-3">
                <dt class="font-medium text-sm text-gray-500">
                  Attributes
                </dt>
                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  <div v-for="item in product.attrs" :key="item.trait_type" class="bg-gray-50 py-5 px-4 sm:grid sm:px-6 sm:gap-4 sm:grid-cols-3">
                    <dt class="font-medium text-sm text-gray-500">
                      {{ item.trait_type }}
                    </dt>
                    <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      {{ item.value }}
                    </dd>
                  </div>
                </dd>
              </div>
            </dl>
          </div>
          <button type="submit" class="border border-transparent rounded-md flex font-medium bg-red-400 mt-6 text-base text-white w-full py-3 px-8 items-center justify-center hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500">
            Make offer
          </button>
        </form>
      </section>
    </div>
  </div>
  <div>
    <router-link :to="contractUrl">
      Jaychou
    </router-link> 的更多 NFT
  </div>
  <div class="flex flex-wrap pt-2 justify-between">
    <router-link v-for="item in 9" :key="item" :to="tokenUrl(item)" class=" mb-5 w-80">
      <img :src="imgSrc(item)" class="object-cover h-80 w-80">
    </router-link>
  </div>
</template>

<route lang="yaml">
meta:
  layout: web3nft.social
</route>
