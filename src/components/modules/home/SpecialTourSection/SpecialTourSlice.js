import { createSlice, createSelector } from '@reduxjs/toolkit';

import data from '../../../../data/destinations.json';

const SpecialTourSlice = createSlice({
  name: 'SpecialTourSlice',
  initialState: {
    data: JSON.parse(JSON.stringify(data)),
    currentCatalog: [],
  },
  reducers: {
    add(state, action) {
      state.data.push(action.payload);
    },

    setCatalog(state, action) {
      const index = state.currentCatalog.indexOf(action.payload);
      if (index !== -1) {
        state.currentCatalog.splice(index, 1);
      } else state.currentCatalog.push(action.payload);
    },
  },
});

export const specialTourSelector = (state) => state?.specialTour.data || [];
export const currentCatalogSelector = (state) => state?.specialTour.currentCatalog || [];
export const dataTourSelector = createSelector(
  specialTourSelector,
  currentCatalogSelector,
  (data, catalog) => {
    if (catalog?.length === 0) return data;
    return data.filter((item) => catalog?.includes(item.tenloaihinhdisan));
  }
);

export const { add, setCatalog } = SpecialTourSlice.actions;

export default SpecialTourSlice.reducer;
