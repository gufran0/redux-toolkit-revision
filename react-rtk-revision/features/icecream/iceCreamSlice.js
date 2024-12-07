import { createSlice } from "@reduxjs/toolkit";
// const { cakeActions } = require("../cake/cakeSlice");
import { ordered as cakeOrdered } from "../cake/cakeSlice";

// const createSlice = require("@reduxjs/toolkit").createSlice;

const initialState = {
  numOfIceCream: 20,
};

const iceCreamSlice = createSlice({
  name: "icecream",
  initialState,
  reducers: {
    ordered: (state, action) => {
      state.numOfIceCream--;
    },
    restocked: (state, action) => {
      state.numOfIceCream += action.payload;
    },
    extraReducers: (builder) => {
      builder.addCase(ordered, (state) => {
        state.numOfIceCreams--;
      });
    },
  },
});

export default iceCreamSlice.reducer;

export const { ordered, restocked } = iceCreamSlice.actions;

// module.exports = iceCreamSlice.reducer;
// module.exports.iceCreamActions = iceCreamSlice.actions;
