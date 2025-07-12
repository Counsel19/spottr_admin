import { createSlice } from "@reduxjs/toolkit";

interface RoutingSliceState {
  selectedSubLinks?: {
    name: string;
    path: string;
  }[];
}

const initialState: RoutingSliceState = {
  selectedSubLinks: undefined,
};

const routingSlice = createSlice({
  name: "routing",
  initialState,
  reducers: {
    selectSubLinks: (state, action) => {
      state.selectedSubLinks = action.payload;
    },
  },
});

export const { selectSubLinks } = routingSlice.actions;

export default routingSlice.reducer;
