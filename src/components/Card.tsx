import {Link} from "react-router-dom";

import {useAppDispatch} from "../app/hooks";
import {Characters} from "../types/characters";
import {deleteCharacter} from "../features/characters/charactersSlice";

import Button from "./Button";

export default function Card({
  name,
  height,
  gender,
  pokemonUrl,
}: Characters & {pokemonUrl?: string}) {
  const dispatch = useAppDispatch();

  return (
    <div className="bg-slate-100 flex justify-between w-2/3 place-items-center my-1 mx-auto border-2 border-stone-300 shadow-3xl p-4 rounded-lg">
      {!pokemonUrl ? (
        <>
          <div className="text-left">
            <h1 className="text-lg">{name}</h1>
            <p>Height: {height}</p>
            {gender !== "n/a" && <p>Gender: {gender}</p>}
          </div>

          <Button text="Eliminar" onClick={() => dispatch(deleteCharacter(name))} />
        </>
      ) : (
        <>
          <div className="text-left">
            <h1 className="text-lg">{name}</h1>
          </div>

          <Link to={`/pokemon/${name}`}>Visitar</Link>
        </>
      )}
    </div>
  );
}
