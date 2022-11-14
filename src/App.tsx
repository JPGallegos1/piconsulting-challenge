import "./App.css";
import {useAppSelector} from "./app/hooks";

function App() {
  const characters = useAppSelector((state) => state.characters.results);

  console.log(characters);

  return <h1 className="text-3xl font-bold underline text-slate-400">Hello world!</h1>;
}

export default App;
