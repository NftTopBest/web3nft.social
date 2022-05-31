// https://docs.web3auth.io/api-reference/web/plugnplay
// https://docs.web3auth.io/api-reference/web/providers/evm
// https://collect.100thieves.com/
import type { CONNECTED_EVENT_DATA, SafeEventEmitterProvider } from '@web3auth/base'
import { ADAPTER_STATUS, CHAIN_NAMESPACES } from '@web3auth/base'
import { LOGIN_MODAL_EVENTS } from '@web3auth/ui'
import { Web3Auth } from '@web3auth/web3auth'
import { ethers } from 'ethers'

const clientId = WEB3AUTH_CLIENT_ID // get from https://dashboard.web3auth.io
const opts = {
  clientId,
  chainConfig: {
    chainNamespace: CHAIN_NAMESPACES.EIP155,
    // chainId: '0x1',
    chainId: '0x13881',
    rpcTarget: 'https://polygon-mumbai.infura.io/v3/ad1a446ac37a4d9695eac653948f0200',
  },
  uiConfig: {
    appLogo: '/logo.png',
    theme: 'dark',
    loginMethodsOrder: ['twitter'],
    // loginMethodsOrder: ['twitter', 'discord', 'github', 'weibo', 'google', 'facebook', 'reddit', 'twitch', 'apple', 'line', 'kakao', 'linkedin', 'wechat', 'email_passwordless'],
  },
}

export const useWeb3Auth = () => {
  let loading = $ref(false)
  let connecting = $ref<boolean>(false)
  let provider = $ref<SafeEventEmitterProvider | null>(null)
  let signer = $ref(null)
  let walletAddress = $ref(null)
  let userInfo = $ref(null)
  let web3AuthInitFinished = $ref(false)

  let web3auth = null
  const initModal = async() => {
    try {
      loading = true
      web3auth = new Web3Auth(opts)
      // https://docs.web3auth.io/api-reference/web/adapters/openlogin
      // const openloginAdapter = new OpenloginAdapter({
      //   adapterSettings: {
      //     clientId,
      //     network: 'testnet',
      //     uxMode: 'redirect',
      //     // uxMode: 'popup',
      //   },
      // })
      // web3Auth.configureAdapter(openloginAdapter)
      // const metamaskAdapter = new MetamaskAdapter()
      // web3Auth.configureAdapter(metamaskAdapter)
      subscribeAuthEvents()
      await web3auth.initModal({})
      web3AuthInitFinished = true
    }
    catch (error) {
      console.log('useWeb3Auth====> error', error)
      // console.log('useWeb3Auth====> error', error)
    }
    finally {
      loading = false
      // console.log('useWeb3Auth====> finish init')
    }
  }

  const initUserData = async(_provider) => {
    provider = new ethers.providers.Web3Provider(_provider)
    signer = provider.getSigner()
    walletAddress = await signer.getAddress()
    userInfo = await web3auth.getUserInfo()
  }

  function subscribeAuthEvents() {
    web3auth.on(ADAPTER_STATUS.CONNECTED, async(data: CONNECTED_EVENT_DATA) => {
      await initUserData(web3auth.provider)
    })
    web3auth.on(ADAPTER_STATUS.CONNECTING, () => {
      // console.log('subscribeAuthEvents===>> connecting')
      connecting = true
    })
    web3auth.on(ADAPTER_STATUS.DISCONNECTED, () => {
      // console.log('subscribeAuthEvents===>> disconnected')
      provider.value = null
    })
    web3auth.on(ADAPTER_STATUS.ERRORED, (error) => {
      console.log('subscribeAuthEvents===>> errored', error)
    })
    web3auth.on(LOGIN_MODAL_EVENTS.MODAL_VISIBILITY, (isVisible: boolean) => {
      // console.log('subscribeAuthEvents===>> isVisible :', isVisible)
      connecting = isVisible
    })
  }

  async function doConnect() {
    try {
      const web3authProvider = await web3auth.connect()
      await initUserData(web3authProvider)
    }
    catch (error) {
      console.log('error', error)
    }
  }

  async function doDisconnect() {
    await web3auth.logout()
    provider = null
    signer = null
    walletAddress = null
    userInfo = null
  }

  onMounted(initModal)

  return $$({
    loading,
    connecting,
    provider,
    signer,
    walletAddress,
    userInfo,
    doConnect,
    doDisconnect,
    web3AuthInitFinished,
  })
}
