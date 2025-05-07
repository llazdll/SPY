// src/redux/hintSlice.ts
import { createSlice } from '@reduxjs/toolkit';

interface HintState {
  isHintVisible: boolean; // Only track visibility
}

const initialState: HintState = {
  isHintVisible: false, // Default: hidden
};

const hintSlice = createSlice({
  name: 'hint',
  initialState,
  reducers: {
    toggleHint: (state) => {
      state.isHintVisible = !state.isHintVisible;
    },
    setHintVisibility: (state, action: { payload: boolean }) => {
      state.isHintVisible = action.payload; // Force show/hide
    },
  },
});

export const { toggleHint, setHintVisibility } = hintSlice.actions;
export default hintSlice.reducer;