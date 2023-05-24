import axios, { AxiosError } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Product } from 'types/todo';


axios.defaults.baseURL = 'https://my-json-server.typicode.com/VLadIslavSurkov/jsonn';

export const fetchProducts = createAsyncThunk<Product[], void, { rejectValue: string }>(
    '/suggestions',
    async (_, { rejectWithValue }) => {
        try {
            const res = await axios.get('/productRequests');
            return res.data 
        } catch (e) {
            const err = e as AxiosError
            console.log(err.message);
            return rejectWithValue(err.message);
        }
    }
);