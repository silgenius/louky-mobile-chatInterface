// features/appConfig/appConfigSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isSocketConnected: false,
  theme: 'light',         // or 'dark'
  language: 'en',         // e.g., 'en', 'fr'
  appVersion: '1.0.0',    // or fetched dynamically
};

const appConfigSlice = createSlice({
  name: 'appConfig',
  initialState,
  reducers: {
    setSocketConnected(state, action) {
      state.isSocketConnected = action.payload;
    },
    toggleTheme(state) {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
    },
    setTheme(state, action) {
      state.theme = action.payload;
    },
    setLanguage(state, action) {
      state.language = action.payload;
    },
    setAppVersion(state, action) {
      state.appVersion = action.payload;
    },
    resetAppConfig(state) {
      return initialState;
    },
  },
});

export const {
  setSocketConnected,
  toggleTheme,
  setTheme,
  setLanguage,
  setAppVersion,
  resetAppConfig,
} = appConfigSlice.actions;

export default appConfigSlice;
