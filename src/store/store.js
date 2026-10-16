import { configureStore } from '@reduxjs/toolkit';
import uiReducer from './slices/uiSlice';
import courseReducer from './slices/courseSlice';

export const store = configureStore({
  reducer: {
    ui: uiReducer,
    courses: courseReducer,
  },
});

export default store;
