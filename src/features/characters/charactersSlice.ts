import {createSlice} from "@reduxjs/toolkit";

export interface Characters {
  name: string;
  height: string;
  gender: string;
}

interface State {
  results: Characters[];
}

const initialState = {
  results: [],
} as State;

export const charactersSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {
    getState: (state) => {
      return state;
    },
  },
});

export default charactersSlice.reducer;
