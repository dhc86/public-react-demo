import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

import api from "@/api";



const defaultValues = {
  listings: [],
  favoriteListingsIds: [],
  error: null,
  status: 'idle',
};

const listingSlice = createSlice({
    name: 'listings',
    initialState: defaultValues,
    reducers: {
        addFavouriteListing: (prevState, action) => {
         prevState.favoriteListingsIds.push(action.payload);
        },
        removeFavouriteListing: (prevState, action) => {
          prevState.favoriteListingsIds = prevState.favoriteListingsIds.filter(
            (id) => id !== action.payload,
          );
        },

    },
    extraReducers: (builder) => {
      builder
        .addCase(fetchListings.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(fetchListings.fulfilled, (state, action) => {
          state.status = 'succeeded';
          state.listings = action.payload;
        })
        .addCase(fetchListings.rejected, (state, action) => {
          if (axios.isCancel(action.payload)) {
              return;
            }
          state.status = 'failed';
          state.error = action.error.message;
        })
    }
});

export const fetchListings = createAsyncThunk(
    'listings/fetchListings',
    async (options) => {
      const response = await api.get('/api/listings', { params: options });
      return response.data;
    }
)

export const { addFavouriteListing, removeFavouriteListing } = listingSlice.actions;

const listingsReducer = listingSlice.reducer
export default listingsReducer;

