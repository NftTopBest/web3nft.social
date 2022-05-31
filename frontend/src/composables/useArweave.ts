export const useArweave = () => {
  const arweave = inject('arweave')

  async function getPostInfos() {
    const query = buildQuery()
    const results = await arweave.api.post('/graphql', query)
      .catch((err) => {
        console.error('GraphQL query failed')
        throw new Error(err)
      })
    const edges = results.data.data.transactions.edges
    console.log(edges)
    return []
  }

  const variables = reactive({
    namespace: CYBERCONNECT_NAMESPACE,
    address,
    first,
    after,
  })
  const { data, isFetching, execute } = useQuery({ query: GET_IDENTITY, variables })

  return $$({
    variables,
    data,
    isFetching,
    execute,
    getPostInfos,
  })
}
