import { configureStore } from '@reduxjs/toolkit';
import { unsplashApiSlice } from '../services/unsplash-api-slice';
import { reducer as photoReducer } from './photo/slice';

export default configureStore({
    reducer: {
        photo: photoReducer,
        [unsplashApiSlice.reducerPath]: unsplashApiSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
        .concat(unsplashApiSlice.middleware),
});
