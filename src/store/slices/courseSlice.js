import { createSlice } from '@reduxjs/toolkit';
import { courses } from '../../data/courses';

const initialState = {
  items: courses,
  selectedCategory: 'all',
};

const courseSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
  },
});

export const { setSelectedCategory } = courseSlice.actions;
export default courseSlice.reducer;
