<script setup lang="ts">
import LitJsSdk from 'lit-js-sdk'
const litNodeClient = inject('litNodeClient')

useEventListener(document, 'lit-ready', async(event) => {
  console.log('====> lit-ready event :', event)
  const authSig = await LitJsSdk.checkAndSignAuthMessage({ chain: 'ethereum' })
  const { encryptedString, symmetricKey } = await LitJsSdk.encryptString(
    'this is a secret message',
  )
  const chain = 'ethereum'

  const accessControlConditions = [
    {
      contractAddress: '',
      standardContractType: '',
      chain,
      method: 'eth_getBalance',
      parameters: [
        ':userAddress',
        'latest',
      ],
      returnValueTest: {
        comparator: '>=',
        value: '10000000000000',
      },
    },
  ]

  const encryptedSymmetricKey = await litNodeClient.saveEncryptionKey({
    accessControlConditions,
    symmetricKey,
    authSig,
    chain,
  })
  console.log('====> {encryptedSymmetricKey} :', { encryptedSymmetricKey })
})

console.log('====> hehe :')

</script>
<template>
  <div>
    hehe
  </div>
</template>

<route lang="yaml">
meta:
  layout: blank
</route>
