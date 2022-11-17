import {useLoaderData} from "react-router-dom";

import CardList from "../../components/CardList";
import Layout from "../../components/Layout";

export interface Pokemon {
  results: Results[];
}

interface Results {
  name: string;
  url: string;
}

export default function PokemonApp() {
  const pokemons = useLoaderData() as Pokemon;

  return (
    <Layout>
      {!pokemons.results ? (
        <div>Loading...</div>
      ) : (
        <section>
          <ul>
            {pokemons.results.map((pokemon) => (
              <CardList key={pokemon.name} name={pokemon.name} pokemonUrl={pokemon.url} />
            ))}
          </ul>
        </section>
      )}
    </Layout>
  );
}
