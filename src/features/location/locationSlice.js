import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const findLocation = createAsyncThunk(
  "location/findLocation",
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
    searchLocation: [],
  },
  extraReducers: (builder) => {
    builder.addCase(findLocation.fulfilled, (state, actions) => {
      state.location = actions.payload.places;
      state.searchLocation = actions.payload.places;
    });
  },
});

export const { reducer, findSpaceship } = locationSlice.actions;
export default locationSlice.reducer;
