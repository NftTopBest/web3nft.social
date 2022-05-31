// https://juejin.cn/post/7078281612013764616
// https://juejin.cn/post/7049196967770980389
// https://juejin.cn/post/7057439040911441957
export const demoStore = defineStore('demoStore', {
  state: () => {
    return {
      msg: 'Hello Web3',
      count: 0,
    }
  },
  // https://pinia.vuejs.org/core-concepts/getters.html#without-setup
  getters: {
    msgLen(state) {
      return state.msg.length
    },
    msgLen2() {
      return this.msg.length
    },
    useAnotherStore() {
      return this.useAnotherStore().someData
    },
  },
  actions: {
    updateMsg(val) {
      this.count++
      this.msg = val
    },
    async updateMsgAsync(val) {
      this.msg = val
    },
  },
})

// in setup
// const store = demoStore()
// store.msgLen
// store.msg
// store.count
// store.updateMsg('Hello Vue3 with Web3')
