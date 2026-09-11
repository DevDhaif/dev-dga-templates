import { createBrowserRouter, Navigate } from 'react-router';
import { DEFAULT_LOCALE } from '@/i18n/locale';
import { HomePage } from '@/pages/home/HomePage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { LocaleLayout } from './locale-layout';

export const router = createBrowserRouter([
  { path: '/', element: <Navigate to={`/${DEFAULT_LOCALE}/home`} replace /> },
  {
    path: '/:locale',
    element: <LocaleLayout />,
    children: [
      { index: true, element: <Navigate to="home" replace /> },
      { path: 'home', element: <HomePage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
]);
