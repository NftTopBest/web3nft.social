const profileFields = [
  { name: 'twitter', label: 'Twitter', url: '', placeholder: 'twitter.com/your-user-name', isShow: true },
  { name: 'website', label: 'Website', url: '', placeholder: 'example.com', isShow: true },
  { name: 'github', label: 'Github', url: '', placeholder: 'example.com', isShow: true },
  { name: 'reddit', label: 'Reddit', url: '', placeholder: 'example.com', isShow: true },
  { name: 'weibo', label: 'Weibo', url: '', placeholder: 'example.com', isShow: true },
  { name: 'instagram', label: 'Instagram', url: '', placeholder: 'instagram.com/your-user-name', isShow: true },
  { name: 'facebook', label: 'Facebook', url: '', placeholder: 'facebook.com/your-user-name', isShow: true },
  { name: 'opensea', label: 'OpenSea', url: '', placeholder: 'opensea.com/your-collection-path', isShow: true },
  { name: 'discord', label: 'Discord', url: '', placeholder: 'discord.com/your-guild-id', isShow: true },
  { name: 'telegram', label: 'Telegram', url: '', placeholder: 'telegram.com/your-user-name', isShow: true },
]

const initProfileFieldsKeyMap = {
  avatar: '/logo.png',
  banner: '/tmp/banner1.jpg',
  firstname: '',
  lastname: '',
}

profileFields.map(({ name }) => {
  initProfileFieldsKeyMap[`${name}Title`] = ''
  initProfileFieldsKeyMap[name] = ''
})

export const CERAMIC_initProfileFieldsKeyMap = { ...initProfileFieldsKeyMap }
export const CERAMIC_profileFields = profileFields
