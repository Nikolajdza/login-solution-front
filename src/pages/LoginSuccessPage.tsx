import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { isAuthenticated } from '@/services/auth.service.ts'
import { ROUTES } from '@/constants/pageRoutes.ts'

export const LoginSuccessPage = () => {
  const navigate = useNavigate()

  useEffect(() => {
    if (isAuthenticated()) {
      navigate(ROUTES.DASHBOARD, { replace: true })
    }
  }, [navigate])

  useEffect(() => {
    const bc = new BroadcastChannel('auth_channel')

    bc.postMessage('authentication complete')

    setTimeout(() => {
      bc.close()

      window.close()
    }, 1000)
  }, [])

  return <div>Thank you for logging in!</div>
}
