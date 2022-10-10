import { createSlice } from '@reduxjs/toolkit';

const mode = localStorage.getItem('mode');

const initialState = {
    mode: mode || 'light',
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
