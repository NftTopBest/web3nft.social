// import LitJsSdk from 'lit-js-sdk'
// import { Integration } from 'lit-ceramic-sdk'
import type { UserModule } from '~/types'

// { app, router, routes, isClient, initialState }
export const install: UserModule = async({ isClient, app }) => {
  if (!isClient)
    return

  // const litCeramicIntegration = new Integration('https://ceramic-clay.3boxlabs.com', 'mumbai')
  // onMounted(() => {
  //   litCeramicIntegration.startLitClient(window)
  // })
  // const client = new LitJsSdk.LitNodeClient()
  // app.provide('litNodeClient', client)
  // await client.connect()
}
