import type {PayloadAction} from "@reduxjs/toolkit";

import {createSlice} from "@reduxjs/toolkit";

import {Characters} from "../../types/characters";

type Loading = "loading" | "success" | "error";
type Modal = "open" | "close";

interface State {
  isLoading: Loading;
  showModal: Modal;
  results: Characters[];
  filteredResults: Characters[];
  query: string;
}

const initialState = {
  isLoading: "loading",
  showModal: "close",
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
    setModal: (state: State, action: PayloadAction<Modal>) => {
      state.showModal = action.payload;
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

    addCharacter: (state: State, action: PayloadAction<Characters>) => {
      state.results.push(action.payload);
      state.filteredResults.push(action.payload);
      state.showModal = "close";
    },
    deleteCharacter: (state: State, action: PayloadAction<string>) => {
      const characterFound = state.filteredResults.find((result) => result.name === action.payload);

      if (characterFound) {
        state.filteredResults.splice(state.filteredResults.indexOf(characterFound), 1);
      }
    },
  },
});

export const {
  setCharacters,
  startLoading,
  setModal,
  searchCharacter,
  setQuery,
  deleteCharacter,
  addCharacter,
} = charactersSlice.actions;
export default charactersSlice.reducer;
