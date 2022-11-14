import {setCharacters, startLoading} from "../features/characters/charactersSlice";

export const getCharacters = () => {
  return async (dispatch: any, getState?: any) => {
    dispatch(startLoading());

    const response = await fetch("https://swapi.dev/api/people/");
    const data = await response.json();

    dispatch(setCharacters(data.results));
  };
};
