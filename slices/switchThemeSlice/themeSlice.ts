import { createSlice,PayloadAction } from '@reduxjs/toolkit';

export type Theme = 'light'| 'dark'


const themeSlice = createSlice({
  name: '@@theme',
  initialState: 'dark' as Theme,
  reducers: {
    setTheme: (_, action: PayloadAction<Theme>) => action.payload,
  }
});

export const ThemeAction= themeSlice.actions;
export const themeReducer = themeSlice.reducer;
  