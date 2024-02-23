import { FC } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { ROUTES } from '@/constants/pageRoutes.ts'
import { isAuthenticated } from '@/services/auth.service.ts'

interface GuardedRouteProps {
  children: React.ReactElement
  redirectPath?: string
}

const ProtectedRoute: FC<GuardedRouteProps> = ({
  children,
  redirectPath = ROUTES.LOGIN,
}) => {
  const location = useLocation()

  if (!isAuthenticated()) {
    return <Navigate to={redirectPath} replace state={{ from: location }} />
  }

  return children
}

export default ProtectedRoute
