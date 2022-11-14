import {Characters} from "../types/characters";

import Button from "./Button";

export default function Card({name, height, gender}: Characters) {
  return (
    <div className="bg-slate-100 flex justify-between w-2/3 place-items-center my-1 mx-auto border-2 border-stone-300 shadow-3xl p-4 rounded-lg">
      <div className="text-left">
        <h1 className="text-lg">{name}</h1>
        <p>Height: {height}</p>
        {gender !== "n/a" && <p>Gender: {gender}</p>}
      </div>

      <Button text="Eliminar" />
    </div>
  );
}
