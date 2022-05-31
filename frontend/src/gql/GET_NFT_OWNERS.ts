export const GET_NFT_OWNERS = gql`
  query ($contract: String!, $tokenId: String) {
    nftOwners(
        contract: $contract
        tokenId: $tokenId
    ) {
      owner
      tokenId
      twitter {
        handle
        avatar
        verified
        tweetId
        source
        followerCount
      }
    }
  }
`
