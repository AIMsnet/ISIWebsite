import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  mobileMenuOpen: false,
  searchQuery: '',
  fontSizeLevel: 0, // -1: small, 0: normal, 1: large
  language: 'EN', // 'EN' | 'HI'
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleMobileMenu: (state) => {
      state.mobileMenuOpen = !state.mobileMenuOpen;
    },
    closeMobileMenu: (state) => {
      state.mobileMenuOpen = false;
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    setFontSizeLevel: (state, action) => {
      state.fontSizeLevel = action.payload;
    },
    toggleLanguage: (state) => {
      state.language = state.language === 'EN' ? 'HI' : 'EN';
    },
  },
});

export const { toggleMobileMenu, closeMobileMenu, setSearchQuery, setFontSizeLevel, toggleLanguage } = uiSlice.actions;
export default uiSlice.reducer;

