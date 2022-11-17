import {useLoaderData, useParams} from "react-router-dom";

import Layout from "../../components/Layout";
import {IPokemon, Ability} from "../../types/pokemon";

export default function Pokemon() {
  const pokemon = useLoaderData() as IPokemon;
  const params = useParams() as {name: string};

  const capitalize = (string: Ability["name"]) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <Layout>
      <div className="bg-slate-100 flex justify-between w-4/5 place-items-center my-1 mx-auto border-2 border-stone-300 shadow-3xl p-4 rounded-lg">
        <div className="text-left">
          <h2 className="text-xl">Learn more about {capitalize(params.name)}:</h2>
          <p className="text-gray-500">Peso: {pokemon.weight}kgs</p>
          <p className="text-gray-500">Altura: {pokemon.height}cms</p>
          <p className="text-gray-500">Experiencia base: {pokemon.base_experience}kgs</p>
          <div className="my-8">
            <p className="text-lg underline">Stats:</p>
            <ul className="list-disc ml-4">
              {pokemon.stats.map((stat, index) => (
                <li key={pokemon.id + (index + pokemon.id)} className="">
                  <div className="flex gap-2">
                    <p className="text-gray-500">{capitalize(stat.stat.name)}:</p>
                    <p className="font-bold text-gray-700">{stat.base_stat}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="">
          <div className="w-40">
            <img
              alt={`${params.name} image`}
              className="w-full"
              src={pokemon.sprites.front_default}
            />
          </div>

          <div className="my-8">
            <p className="text-lg underline">Habilidades:</p>
            <ul className="list-disc ml-4">
              {pokemon.abilities.map(({ability: {name}}, index) => (
                <li key={pokemon.id + (index + pokemon.id)} className="text-gray-500">
                  {capitalize(name)}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
}
