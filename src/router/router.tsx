import {createBrowserRouter} from "react-router-dom";

import App from "../pages/App";
import PokemonApp from "../pages/Pokemon";
import Pokemon from "../pages/Pokemon/Pokemon";

const routes = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "pokemon",
    element: <PokemonApp />,
    loader: async ({request}: any) => {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=10&offset=0", {
        signal: request.signal,
      });

      const data = await response.json();

      return data;
    },
  },
  {
    path: "pokemon/:name",
    element: <Pokemon />,
    loader: async ({request, params}: any) => {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.name}`, {
        signal: request.signal,
      });
      const data = await response.json();

      return data;
    },
  },
];

export const router = createBrowserRouter(routes);
