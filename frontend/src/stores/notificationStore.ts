interface MessageItem { title: string; timeout?: number; isError?: boolean }

export const notificationStore = defineStore('notificationStore', () => {
  let isShow = $ref(false)
  let message = $ref<MessageItem>()
  const messageList = $ref<[MessageItem]>([])
  const addMessage = (messageItem: MessageItem) => {
    messageList.push(messageItem)
  }

  // TODO: show a list of notification
  watchEffect(() => {
    if (isShow) return
    if (messageList.length === 0) return

    message = messageList.shift()
    isShow = true

    const timeout = (message.timeout || 3) + 1
    setTimeout(() => {
      isShow = false
    }, timeout * 1000)
  })

  return $$({
    isShow,
    message,
    addMessage,
    messageList,
  })
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(notificationStore, import.meta.hot))
