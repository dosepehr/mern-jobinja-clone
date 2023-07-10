import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from '../reducers/apiSlice';
import authSlice from '../reducers/authSlice';

const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        auth: authSlice,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store;
