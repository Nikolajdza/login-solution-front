import { createBrowserRouter } from 'react-router-dom';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { authRoute } from './auth.tsx';
import { protectedRoute } from './protected';

const routes = [
  authRoute,
  protectedRoute,
  {
    path: '*',
    element: <NotFoundPage />
  }
];

const opt = {};

export const router = createBrowserRouter(routes, opt);
