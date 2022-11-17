import {useEffect} from "react";

import {useAppDispatch, useAppSelector} from "../app/hooks";
import {getCharacters} from "../app/thunk";
import CardList from "../components/CardList";
import Layout from "../components/Layout";
import SearchForm from "../components/SearchForm";

function App() {
  const characters = useAppSelector((state) => state.characters.filteredResults);
  const isLoading = useAppSelector((state) => state.characters.isLoading);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCharacters());
  }, []);

  return (
    <Layout>
      {isLoading === "loading" ? (
        <div>Loading...</div>
      ) : (
        <section>
          <SearchForm />

          <ul>
            {characters.map((character, index) => (
              <CardList
                key={character.name}
                gender={character.gender}
                height={character.height}
                name={character.name}
              />
            ))}
          </ul>
        </section>
      )}
    </Layout>
  );
}

export default App;
