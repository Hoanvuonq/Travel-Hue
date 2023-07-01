import { createSlice } from "@reduxjs/toolkit"

export const sliceName = 'appSlice'

const appSlice = createSlice({
  name: sliceName,
  initialState: {
    openSidebar: true,
  },
  reducers: {
    setOpenSidebar: (state, action) => {
      const { payload } = action;
      state.openSidebar = payload || !state.openSidebar;
    }
  }
})

const { actions, reducer } = appSlice

export const { setOpenSidebar } = actions;
export const selectStatusSidebar = state => state.app.openSidebar
export default reducer