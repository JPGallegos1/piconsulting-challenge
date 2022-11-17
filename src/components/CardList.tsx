import {Characters} from "../types/characters";

import Card from "./Card";

export default function CardList({
  name,
  height,
  gender,
  pokemonUrl,
}: Characters & {pokemonUrl?: string}) {
  return (
    <>
      {!pokemonUrl ? (
        <li>
          <Card gender={gender} height={height} name={name} />
        </li>
      ) : (
        <li>
          <Card name={name} pokemonUrl={pokemonUrl} />
        </li>
      )}
    </>
  );
}
