import type {PayloadAction} from "@reduxjs/toolkit";

import {createSlice} from "@reduxjs/toolkit";

import {Characters} from "../../types/characters";

type Loading = "loading" | "success" | "error";

interface State {
  isLoading: Loading;
  results: Characters[];
  filteredResults: Characters[];
  query: string;
}

const initialState = {
  isLoading: "loading",
  results: [],
  filteredResults: [],
  query: "",
} as State;

export const charactersSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {
    startLoading: (state) => {
      state.isLoading = "loading";
    },
    setCharacters: (state: State, action: PayloadAction<State["results"]>) => {
      state.results = action.payload;
      state.isLoading = "success";
      state.filteredResults = [...action.payload];
    },
    searchCharacter: (state: State, action: PayloadAction<string>) => {
      const filteredResults = state.results.filter((result) => {
        return result.name.toLocaleLowerCase().includes(action.payload.toLowerCase());
      });

      return {
        ...state,
        filteredResults: action.payload.length > 0 ? filteredResults : [...state.results],
      };
    },
    setQuery: (state: State, action: PayloadAction<string>) => {
      state.query = action.payload;
    },
  },
});

export const {setCharacters, startLoading, searchCharacter, setQuery} = charactersSlice.actions;
export default charactersSlice.reducer;
