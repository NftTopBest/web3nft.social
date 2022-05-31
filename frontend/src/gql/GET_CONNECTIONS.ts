export const GET_CONNECTIONS = gql`
  query ($fromAddr: String!, $toAddrList: [String!]!) {
    connections(
        fromAddr: $fromAddr
        toAddrList: $toAddrList
    ) {
        fromAddr
        toAddr
        followStatus {
            isFollowed
            isFollowing
        }
        namespace
        alias
        network
        createdAt
        updatedAt
        proof
    }
  }
`
