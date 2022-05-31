import { ethers } from 'ethers'
import { useWeb3Auth } from '~/composables/useWeb3Auth'
import { isSameAddress } from '~/helpers/web3'
export interface getContractOpts {
  name: string
  isWrite?: Boolean
}

export const web3Store = defineStore('web3Store', () => {
  const {
    loading,
    connecting,
    provider,
    signer,
    walletAddress,
    userInfo,
    doConnect,
    doDisconnect,
    web3AuthInitFinished,
  } = $(useWeb3Auth())

  const isPending = $computed(() => loading || connecting)

  const user = $ref({
    name: 'Bruce Wayne',
    email: 'Bruce@Web3NFT.Social',
    imageUrl:
    'https://pbs.twimg.com/profile_images/1524962654510620684/X7oh9xcV_400x400.png',
  })

  const doLogin = async() => {
    console.log('doLogin start')
    await doConnect()
  }
  const doLogout = async() => {
    await doDisconnect()
  }

  const userNavigation = [
    // { name: 'Your Profile', href: '#' },
    { name: 'Settings', href: '/settings/Web3Home' },
    { name: 'Sign out', onClick: doLogout },
  ]

  const getContract = async({ name, isWrite = false }: getContractOpts) => {
    if (!walletAddress) {
      await doLogin()
      if (!walletAddress)
        return false
    }
    // TODO:
    const web3Provider = new ethers.providers.Web3Provider(provider)
    const contractAddress = contractAddressMap[chainId][name]
    const contractAbi = contractAbiMap[name]
    const providerOrSinger = isWrite ? web3Provider.getSigner() : web3Provider
    const contract = new ethers.Contract(contractAddress, contractAbi, providerOrSinger)
    // console.log('====> name, chainId, contractAbi :', name, chainId, contractAbi)
    return contract
  }

  const isOwner = (address) => {
    return isSameAddress(address, walletAddress)
  }

  return $$({
    user,
    walletAddress,
    userNavigation,
    isPending,
    provider,
    signer,
    userInfo,
    web3AuthInitFinished,

    isOwner,
    doLogin,
    doLogout,
    getContract,
  })
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(web3Store, import.meta.hot))
