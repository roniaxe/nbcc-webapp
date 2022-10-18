import { lazy, Suspense } from 'react';
import {
    createBrowserRouter, Navigate
} from 'react-router-dom';
import AppLayout from './layout/app-layout';
import LoadingPage from './pages/loading';

const HomePage = lazy(() => import('./pages/home'));
const GalleriesPage = lazy(() => import('./pages/galleries'));
const GalleryPhotos = lazy(() => import('./pages/galleries/gallery-photos'));
const AboutPage = lazy(() => import('./pages/about'));
const TournamentsPage = lazy(() => import('./pages/tournaments'));
const MembershipPage = lazy(() => import('./pages/membership'));
const HistoryPage = lazy(() => import('./pages/history'));
const ErrorPage = lazy(() => import('./pages/error'));

const page = (elem) => <Suspense fallback={<LoadingPage />}>{elem}</Suspense>;

export const browserRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Navigate to="/home" replace />
            },
            {
                path: '/home',
                element: page(<HomePage />)
            },
            {
                path: '/tournaments',
                element: page(<TournamentsPage />)
            },
            {
                path: '/membership',
                element: page(<MembershipPage />)
            },
            {
                path: '/history',
                element: page(<HistoryPage />)
            },
            {
                path: '/about',
                element: page(<AboutPage />)
            },
            {
                path: '/galleries',
                element: page(<GalleriesPage />)
            },
            {
                path: '/galleries/:galleryId/photos',
                element: page(<GalleryPhotos />)
            }
        ]
    }
]);
