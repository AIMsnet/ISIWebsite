import { configureStore } from '@reduxjs/toolkit';
import uiReducer from './slices/uiSlice';
import courseReducer from './slices/courseSlice';
import noticeReducer from './slices/noticeSlice';

export const store = configureStore({
  reducer: {
    ui: uiReducer,
    courses: courseReducer,
    notices: noticeReducer,
  },
});

export default store;
