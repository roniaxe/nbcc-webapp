import { createAsyncThunk } from '@reduxjs/toolkit';
import * as photoClient from '../../api/photo-client';

export const getPhotosByCollectionId = createAsyncThunk(
    'photo/getPhotosByCollectionId',
    async ({ id }) => {
        const response = await photoClient.getPhotosByCollectionId(id);
        return response.data;
    }
);
