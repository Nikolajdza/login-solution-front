import React, { FC } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { ROUTES } from '@/constants/pageRoutes.ts';
import { useAuthState, State } from '@/store';

interface GuardedRouteProps {
  children: React.ReactElement;
  redirectPath?: string;
}

const ProtectedRoute: FC<GuardedRouteProps> = ({ children, redirectPath = ROUTES.LOGIN }) => {
  const location = useLocation();
  const { isAuthenticated } = useAuthState() as State;

  if (!isAuthenticated) {
    return <Navigate to={redirectPath} replace state={{ from: location }} />;
  }

  return children;
};

export default ProtectedRoute;