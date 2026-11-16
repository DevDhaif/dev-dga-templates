import { createBrowserRouter, Navigate } from 'react-router';
import { DEFAULT_LOCALE } from '@/i18n/locale';
import { AboutPage } from '@/pages/about/AboutPage';
import { ContactPage } from '@/pages/contact/ContactPage';
import { ContentPage } from '@/pages/content/ContentPage';
import { FaqPage } from '@/pages/faq/FaqPage';
import { FormPage } from '@/pages/form/FormPage';
import { HelpPage } from '@/pages/help/HelpPage';
import { HomePage } from '@/pages/home/HomePage';
import { NationalDayPage } from '@/pages/national-day/NationalDayPage';
import { NotFoundPage } from '@/pages/not-found/NotFoundPage';
import { SearchPage } from '@/pages/search/SearchPage';
import { ServicePage } from '@/pages/service/ServicePage';
import { SitemapPage } from '@/pages/sitemap/SitemapPage';
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
      { path: 'service', element: <ServicePage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'content', element: <ContentPage /> },
      { path: 'content-heavy', element: <ContentPage heavy /> },
      { path: 'form', element: <FormPage /> },
      { path: 'help', element: <HelpPage /> },
      { path: 'faq', element: <FaqPage /> },
      { path: 'contact', element: <ContactPage /> },
      { path: 'search', element: <SearchPage /> },
      { path: 'sitemap', element: <SitemapPage /> },
      { path: 'not-found', element: <NotFoundPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
]);
