export interface User {
  email: string
  name?: string
  provider: 'google' | 'microsoft' | 'facebook'
  profilePicture?: string
}
