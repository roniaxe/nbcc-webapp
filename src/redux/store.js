import { configureStore } from '@reduxjs/toolkit';
import { firebaseApiSlice } from '../services/firebase-api-slice';
import { unsplashApiSlice } from '../services/unsplash-api-slice';
import { reducer as photoReducer } from './photo/slice';

export default configureStore({
    reducer: {
        photo: photoReducer,
        [unsplashApiSlice.reducerPath]: unsplashApiSlice.reducer,
        [firebaseApiSlice.reducerPath]: firebaseApiSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
        .concat(unsplashApiSlice.middleware, firebaseApiSlice.middleware),
});
