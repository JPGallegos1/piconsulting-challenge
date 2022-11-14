import "./App.css";

import {useEffect} from "react";

import {useAppDispatch, useAppSelector} from "./app/hooks";
import {getCharacters} from "./app/thunk";
import CardList from "./components/CardList";
import SearchForm from "./components/SearchForm";

function App() {
  const characters = useAppSelector((state) => state.characters.filteredResults);
  const isLoading = useAppSelector((state) => state.characters.isLoading);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCharacters());
  }, []);

  return (
    <main>
      {isLoading === "loading" ? (
        <div>Loading...</div>
      ) : (
        <section>
          <SearchForm />

          <ul>
            {characters.map((character) => (
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
    </main>
  );
}

export default App;
