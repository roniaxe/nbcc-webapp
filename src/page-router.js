import { lazy, Suspense } from 'react';
import {
    BrowserRouter, Navigate, Route, Routes
} from 'react-router-dom';
import NbccAppBar from './components/core/nbcc-app-bar';

const HomePage = lazy(() => import('./pages/home'));
const GalleriesPage = lazy(() => import('./pages/galleries'));
const GalleryPhotos = lazy(() => import('./pages/galleries/gallery-photos'));

const page = (elem) => <Suspense fallback="Loading...">{elem}</Suspense>;

function PageRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<NbccAppBar />}>
                    <Route index element={<Navigate to="/home" replace />} />
                    <Route path="/home" element={page(<HomePage />)} />
                    <Route path="/galleries" element={page(<GalleriesPage />)} />
                    <Route path="/galleries/:galleryId/photos" element={page(<GalleryPhotos />)} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default PageRouter;
