import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const API_KEY = "MzQwNzo3WVdJRkVEQTdZ";

export const searchLocation = createAsyncThunk(
  "location/searchLocation",
  async (searchText) => {
    const url = `https://barikoi.xyz/v1/api/search/autocomplete/${API_KEY}/place?q=${searchText}`;
    const response = await fetch(url).then((res) => res.json());
    return response;
  }
);

export const locationSlice = createSlice({
  name: "location",
  initialState: {
    location: [],
    searchResult: [],
    findResult: [],
  },
  reducers: {
    findLocation: (state, actions) => {
      state.findResult = state.searchResult.filter(
        (location) => location.id === actions.payload
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(searchLocation.fulfilled, (state, actions) => {
      state.searchResult = actions.payload.places;
    });
  },
});

export const { reducer, findLocation } = locationSlice.actions;
export default locationSlice.reducer;
