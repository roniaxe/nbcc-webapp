import { createSlice } from '@reduxjs/toolkit';
import * as thunk from './thunk';

const initialState = {
    selectedPhoto: null,
};

const slice = createSlice({
    name: 'photo',
    initialState,
    reducers: {
        setSelectedPhoto: (state, action) => {
            state.selectedPhoto = action.payload;
        }
    },
    extraReducers: {}
});

export const actions = { ...slice.actions, ...thunk };
export const { reducer } = slice;
