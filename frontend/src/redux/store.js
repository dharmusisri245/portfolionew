// redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import linkedinReducer from '../linkdinSlice/lindinSlice';

export const store = configureStore({
  reducer: {
    linkedin: linkedinReducer,
  },
});
