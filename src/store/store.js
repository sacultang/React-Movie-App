import { configureStore } from '@reduxjs/toolkit';
import searchSlice from '../store/features/searchSlice';
import scSlice from '../store/features/scSlice';
const store = configureStore({
  reducer: {
    searchSlice,
    scSlice,
  },
});

export default store;
