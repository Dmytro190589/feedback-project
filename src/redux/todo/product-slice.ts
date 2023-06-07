import {  AnyAction, PayloadAction, createSlice } from '@reduxjs/toolkit';
import { fetchProducts } from './product-operations';
import { ItodoState } from 'helpers/types/todo';


const initialState: ItodoState = {
  productRequests: [],
  isLoading: false,
  error: null,
};

export const todoSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      }).addCase(fetchProducts.fulfilled, (state, { payload }) => {
        state.productRequests = payload;
        state.error = null;
        state.isLoading = false;
      }).addMatcher(isError, (state, {payload}: PayloadAction<string>) => {
        state.error = payload;
        state.isLoading = false;
      });
  },
  
});

export const todoReducer = todoSlice.reducer

function isError(action: AnyAction) {
  return action.type.endsWith('rejected');
}