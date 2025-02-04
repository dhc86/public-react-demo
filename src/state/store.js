import { configureStore } from '@reduxjs/toolkit';

import bankReducer from './slices/bankSlice';
import listingsReducer from './slices/listingsSlice';

export const store = configureStore({
  reducer: {
    bank: bankReducer,
    listings: listingsReducer
  },
});
