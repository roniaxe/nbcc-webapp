import { configureStore } from '@reduxjs/toolkit';
import { firebaseApiSlice } from '../../services/firebase-api-slice';
import { unsplashApiSlice } from '../../services/unsplash-api-slice';
import { reducer as photoReducer } from '../photo/slice';
import { reducer as generalReducer } from '../general/slice';
import { listenerMiddleware } from './middleware';

export default configureStore({
    reducer: {
        general: generalReducer,
        photo: photoReducer,
        [unsplashApiSlice.reducerPath]: unsplashApiSlice.reducer,
        [firebaseApiSlice.reducerPath]: firebaseApiSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
        .concat(
            unsplashApiSlice.middleware,
            firebaseApiSlice.middleware,
            listenerMiddleware.middleware
        ),
});
