import { RouteObject } from 'react-router-dom'
import ProtectedRoute from '@/components/helpers/ProtectedRoute'
import { Layout } from '@/components/ui/Layout'
import { ROUTES } from '@/constants/pageRoutes.ts'
import { DashboardPage } from '@/pages/DashboardPage.tsx'

export const protectedRoute: RouteObject = {
  path: ROUTES.DASHBOARD,
  element: <Layout />,
  children: [
    {
      path: ROUTES.DASHBOARD,
      element: (
        <ProtectedRoute>
          <DashboardPage />
        </ProtectedRoute>
      ),
    },
  ],
}
