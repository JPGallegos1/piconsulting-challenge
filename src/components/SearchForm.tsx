import type {ChangeEvent} from "react";

import {useAppDispatch, useAppSelector} from "../app/hooks";
import {searchCharacter, setQuery, setModal} from "../features/characters/charactersSlice";

import Button from "./Button";
import Modal from "./Modal";

export default function SearchForm() {
  const query = useAppSelector((state) => state.characters.query);
  const showModal = useAppSelector((state) => state.characters.showModal);
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(searchCharacter(query));
  };

  return (
    <div className="flex justify-between w-2/3 place-items-center my-1 mx-auto mb-8">
      <div className="w-4/6">
        <input
          className="border-2 border-neutral-300 p-2 rounded-md w-full"
          type="text"
          onChange={(e: ChangeEvent<HTMLInputElement>) => dispatch(setQuery(e.target.value))}
        />
      </div>

      <div className="flex gap-1">
        <Button text="Buscar" onClick={() => handleClick()} />
        <Button text="Agregar" onClick={() => dispatch(setModal("open"))} />
      </div>

      {showModal === "open" ? <Modal /> : null}
    </div>
  );
}
