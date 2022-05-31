import { WebBundlr } from '@bundlr-network/client'
// import Arweave from 'arweave'
import { EthereumAuthProvider, SelfID, WebClient } from '@self.id/web'
import * as ls from '~/helpers/ls'

let selfIDInstance = ''

export const ceramicStore = defineStore('ceramicStore', () => {
  const {
    provider,
    walletAddress,
  } = $(web3Store())
  const bundlr = $ref('')
  const profileFromLS = ls.getItem('basicProfile', {})
  let profile = $ref({
    ...CERAMIC_initProfileFieldsKeyMap,
    ...profileFromLS,
  })
  let isLoading = $ref(true)

  const initAuthSelfID = async() => {
    const client = new WebClient({
      ceramic: 'testnet-clay',
      connectNetwork: 'testnet-clay',
    })

    // If authentication is successful, a DID instance is attached to the Ceramic instance
    const authProvider = new EthereumAuthProvider(window.ethereum, walletAddress)
    await client.authenticate(authProvider)

    // A SelfID instance can only be created with an authenticated Ceramic instance
    selfIDInstance = new SelfID({ client })
  }

  // do init stuff
  watchEffect(async() => {
    if (!provider || !walletAddress) return

    // 1. init bundlr
    // bundlr = new WebBundlr('https://node1.bundlr.network', 'matic', provider)
    // await bundlr.ready()

    await initAuthSelfID()

    const basicProfile = await selfIDInstance.get('basicProfile', selfIDInstance.id)
    profile = {
      ...profile,
      ...basicProfile,
    }
    console.log('====> profile :', profile, selfIDInstance.id)
    isLoading = false
  })

  const updateProfile = async() => {
    const basicProfile = { ...profile }
    const rz = await selfIDInstance.set('basicProfile', basicProfile)
    ls.setItem('basicProfile', basicProfile)
    console.log('====> rz :', rz)
  }

  return $$({
    updateProfile,
    provider,
    profile,
  })
})
