import { createBrowserRouter, Navigate } from 'react-router';
import { DEFAULT_LOCALE } from '@/i18n/locale';
import { HomePage } from '@/pages/home/HomePage';
import { NationalDayPage } from '@/pages/national-day/NationalDayPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { TemplatesPage } from '@/pages/templates/TemplatesPage';
import { LocaleLayout } from './locale-layout';

export const router = createBrowserRouter([
  { path: '/', element: <Navigate to={`/${DEFAULT_LOCALE}`} replace /> },
  {
    path: '/:locale',
    element: <LocaleLayout />,
    children: [
      { index: true, element: <TemplatesPage /> },
      { path: 'home', element: <HomePage /> },
      { path: 'national-day', element: <NationalDayPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
]);
