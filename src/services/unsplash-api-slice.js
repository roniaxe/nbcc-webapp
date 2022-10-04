import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const unsplashApiSlice = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.unsplash.com/',
        prepareHeaders: (headers) => {
            headers.set('Content-Type', 'application/json');
            headers.set('Access-Control-Allow-Origin', '*');
            headers.set('X-CSRF', '1');
            headers.set('Authorization', 'Client-ID KCYYOM7aG1vDYT5lZVj4jxUycdriM8Qwq-Pw8FGpAbk');

            return headers;
        }
    }),
    reducerPath: 'unsplashApi',
    endpoints: (build) => ({
        getPhotosByCollectionId: build.query({
            query: (collectionId) => `collections/${collectionId}/photos`,
        }),
        getCollectionsByUserName: build.query({
            query: (userName) => `users/${userName}/collections`
        })
    })
});

export const {
    useGetPhotosByCollectionIdQuery,
    useGetCollectionsByUserNameQuery
} = unsplashApiSlice;
