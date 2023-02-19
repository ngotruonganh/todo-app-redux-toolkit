import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  search: "",
  status: "All",
  priorities: [],
};

export const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    searchFilterChange: (state, action) => {
      state.search = action.payload;
    },
    statusFilterChange: (state, action) => {
      state.status = action.payload;
    },
    prioritiesFilterChange: (state, action) => {
      state.priorities = action.payload;
    },
  },
});

export const {
  searchFilterChange,
  statusFilterChange,
  prioritiesFilterChange,
} = filtersSlice.actions;
export default filtersSlice.reducer;
