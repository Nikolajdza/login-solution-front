import { RouteObject } from 'react-router-dom'
import { Layout } from '@/components/ui/Layout.tsx'
import { ROUTES } from '@/constants/pageRoutes.ts'
import { LoginPage } from '@/pages/LoginPage.tsx'
import { LoginSuccessPage } from '@/pages/LoginSuccessPage.tsx'
import { LoginErrorPage } from '@/pages/LoginErrorPage.tsx'

export const authRoute: RouteObject = {
  path: ROUTES.DEFAULT_ROUTE,
  element: <Layout />,
  children: [
    {
      path: ROUTES.LOGIN_SUCCESS,
      element: <LoginSuccessPage />,
    },
    {
      path: ROUTES.DEFAULT_ROUTE,
      element: <LoginPage />,
    },
    {
      path: ROUTES.LOGIN,
      element: <LoginPage />,
    },
    {
      path: ROUTES.LOGIN_ERROR,
      element: <LoginErrorPage />,
    },
  ],
}
