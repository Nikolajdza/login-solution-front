import { useCallback } from 'react'
import useUser from '@/hooks/useUser.ts'

export type LoginProvider = 'google' | 'microsoft' | 'facebook'

export const useLogin = () => {
  const { refetch } = useUser()

  const handleLogin = useCallback(
    (provider: LoginProvider) => {
      const newWindow = window.open(
        `http://localhost:3000/auth/${provider}`,
        '_blank',
        'width=500,height=600'
      )

      const bc = new BroadcastChannel('auth_channel')
      bc.onmessage = (event) => {
        if (event.data === 'authentication complete') {
          if (newWindow) newWindow.close()
          refetch()
        }
      }
    },
    [refetch]
  )

  return handleLogin
}
