import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const firebaseApiSlice = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://react-rest-94682-default-rtdb.firebaseio.com/',
        prepareHeaders: (headers) => {
            headers.set('Content-Type', 'application/json');
            headers.set('Access-Control-Allow-Origin', '*');
            headers.set('X-CSRF', '1');

            return headers;
        }
    }),
    reducerPath: 'firebaseApi',
    endpoints: (build) => ({
        getAboutData: build.query({
            query: () => 'about.json'
        }),
        getMembershipData: build.query({
            query: () => 'membership.json'
        })
    })
});

export const {
    useGetAboutDataQuery,
    useGetMembershipDataQuery
} = firebaseApiSlice;
