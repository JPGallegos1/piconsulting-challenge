import {useForm, SubmitHandler} from "react-hook-form";

import {useAppDispatch} from "../app/hooks";
import {setModal, addCharacter} from "../features/characters/charactersSlice";
import {Characters} from "../types/characters";

export default function Modal() {
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: {errors, isSubmitting, isDirty, isValid},
  } = useForm<Characters>();
  const onSubmit: SubmitHandler<Characters> = (data) => {
    dispatch(addCharacter(data));
  };

  return (
    <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
      <div className="relative w-auto my-6 mx-auto max-w-3xl">
        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
          <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
            <h3 className="text-3xl font=semibold">Agregar Personaje</h3>
          </div>
          <div className="relative p-6 flex-auto ">
            <form
              className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 w-full flex flex-col gap-4"
              onSubmit={handleSubmit(onSubmit)}
            >
              <label className="block text-black text-sm font-bold mb-1">Nombre</label>
              <input
                className="required:border-red-500 invalid:border-red-500 shadow appearance-none border rounded w-full py-2 px-1 text-black"
                placeholder="i.e: Luke"
                type="text"
                {...register("name", {required: true, maxLength: 10})}
              />
              {errors.name && <span className="text-red-500">Es requerido un nombre</span>}
              <label className="block text-black text-sm font-bold mb-1">Altura</label>
              <input
                className="required:border-red-500 invalid:border-red-500 shadow appearance-none border rounded w-full py-2 px-1 text-black"
                placeholder="i.e: 160"
                type="text"
                {...register("height", {required: true, maxLength: 3})}
              />
              {errors.height && (
                <span className="text-red-500">Es requerida una altura válida</span>
              )}
              <label className="block text-black text-sm font-bold mb-1">Género</label>
              <select defaultValue="female" {...register("gender")} className="w-full">
                <option value="female">female</option>
                <option value="male">male</option>
              </select>

              <div className="mt-8">
                <button
                  className="text-gray-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                  type="button"
                  onClick={() => dispatch(setModal("close"))}
                >
                  Close
                </button>

                <button
                  className="disabled:opacity-75 disabled:cursor-not-allowed enabled:text-green-500 text-gray-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                  disabled={!isDirty || !isValid || isSubmitting}
                  type="submit"
                >
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
