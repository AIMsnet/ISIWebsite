import { createSlice } from '@reduxjs/toolkit';
import { notices } from '../../data/notices';

const initialState = {
  items: notices,
};

const noticeSlice = createSlice({
  name: 'notices',
  initialState,
  reducers: {},
});

export default noticeSlice.reducer;
