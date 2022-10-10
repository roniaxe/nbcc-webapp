import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    mode: 'light',
};

const slice = createSlice({
    name: 'general',
    initialState,
    reducers: {
        toggleMode: (state, action) => {
            state.mode = action.payload;
        }
    },
    extraReducers: {}
});

export const actions = { ...slice.actions };
export const { reducer } = slice;
