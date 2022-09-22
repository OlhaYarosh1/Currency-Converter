import { createSlice } from '@reduxjs/toolkit';

const ratesSlice = createSlice({
    name: 'rates',
    initialState: {
        rateUsd: null,
        rateEur: null
    },
    reducers: {
        setUsdRate(state, action) {
            state.rateUsd = action.payload;
        },
        setEurRate(state, action) {
            state.rateEur = action.payload;
        }
    }
});

export const rateActions = ratesSlice.actions;

export default ratesSlice;
