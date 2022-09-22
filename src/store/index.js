import ratesSlice from './rates-slice';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
    reducer: {
        rates: ratesSlice.reducer,
    }
});

export default store;
