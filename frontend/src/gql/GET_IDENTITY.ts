export const GET_IDENTITY = gql`
  query ($namespace: String!, $address: String!, $first: Int, $after: String) {
    identity(address: $address) {
      domain
      avatar
      joinTime
      twitter {
        handle
        avatar
        verified
        tweetId
        source
        followerCount
      }
      github {
        username
        gistId
        userId
      }
      followingCount(namespace: $namespace)
      followings(namespace: $namespace, first: $first, after: $after) {
        pageInfo {
          startCursor
          endCursor
          hasNextPage
          hasPreviousPage
        }
        list {
          address
          domain
          avatar
          alias
          namespace
          lastModifiedTime
          verifiable
        }
      }
      followerCount(namespace: $namespace)
      followers(namespace: $namespace, first: $first, after: $after) {
        pageInfo {
          startCursor
          endCursor
          hasNextPage
          hasPreviousPage
        }
        list {
          address
          domain
          avatar
          alias
          namespace
          lastModifiedTime
          verifiable
        }
      }
      friends(namespace: $namespace, first: $first, after: $after){
        pageInfo {
          startCursor
          endCursor
          hasNextPage
          hasPreviousPage
        }
        list {
          address
          domain
          avatar
          alias
          namespace
          lastModifiedTime
          verifiable
        }
      }
    }
  }
`
