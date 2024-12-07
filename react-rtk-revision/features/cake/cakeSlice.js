import { createSlice } from "@reduxjs/toolkit";

const initialSlice = {
  numOfCakes: 10,
};

const cakeSlice = createSlice({
  name: "cake",
  initialState: initialSlice,
  reducers: {
    ordered: (state, action) => {
      state.numOfCakes--;
    },
    restocked: (state, action) => {
      state.numOfCakes += action.payload;
    },
  },
});

export default cakeSlice.reducer;

// module.exports = cakeSlice.reducer;
export const { ordered, restocked } = cakeSlice.actions;
