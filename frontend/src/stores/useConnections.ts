export const useConnections = defineStore('connections', () => {
  const variables = reactive({
    fromAddr: '',
    toAddrList: [],
  })
  const { data, isFetching, execute } = useQuery({ query: GET_CONNECTIONS, variables })

  return {
    variables,
    data,
    isFetching,
    execute,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useConnections, import.meta.hot))
