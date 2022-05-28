import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const searchLocation = createAsyncThunk(
  "location/searchLocation",
  async (searchText) => {
    const response = await fetch(
      `https://barikoi.xyz/v1/api/search/autocomplete/MzQwNzo3WVdJRkVEQTdZ/place?q=${searchText}`
    ).then((res) => res.json());
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
      state.findResult = state.searchResult.filter((location) => {
        return location.id === actions.payload;
      });
      console.log(state.findResult)
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
