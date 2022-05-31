import { Core } from '@self.id/core'
import { Caip10Link } from '@ceramicnetwork/stream-caip10-link'

import { CERAMIC_initProfileFieldsKeyMap } from '~/config/CERAMIC'
const core = new Core({ ceramic: 'testnet-clay' })
export const useCeramic = (address: string) => {
  const profile = $ref({ ...CERAMIC_initProfileFieldsKeyMap })
  const index = Math.floor(Date.now() / 1000) % 10 > 5 ? 2 : 1
  profile.banner = `/tmp/banner${index}.jpg`
  return $$({
    profile,
  })
}
