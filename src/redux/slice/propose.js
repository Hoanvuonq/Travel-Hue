import { createSlice } from '@reduxjs/toolkit';

const proposeSlice = createSlice({
  name: 'proposeSlice',
  initialState: {
    proposes: [],
  },
  reducers: {
    addPropose: (state, action) => {
      state.proposes.push(action.payload);
    },
    removePropose: (state) => {
      state.proposes = [];
    },
  },
});

const {  reducer, actions } = proposeSlice;
export const { addPropose, removePropose } = actions;
export const selectProposes = state => state.propose.proposes
export default reducer;
