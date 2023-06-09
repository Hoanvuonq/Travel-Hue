import { createSlice } from '@reduxjs/toolkit';

const heritageSlice = createSlice({
  name: 'heritage',
  initialState: [],
  reducers: {
    addHeritage: (state, action) => {
      state.push(action.payload);
    },
    removeHeritage: (state, action) => {
      const index = state.findIndex((item) => item.id === action.payload);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
  },
});

export const { addHeritage, removeHeritage } = heritageSlice.actions;

export default heritageSlice.reducer;
