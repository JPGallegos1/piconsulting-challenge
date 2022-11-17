import {Link} from "react-router-dom";

export default function Header() {
  return (
    <header className="w-full bg-stone-300">
      <div className="flex w-4/5 justify-between items-center mt-0 mb-8 mx-auto p-4">
        <div className="cursor-pointer">
          <h1 className="text-xl underline">
            <Link to="/">Pi Consulting</Link>
          </h1>
        </div>

        <nav>
          <ul className="flex gap-2">
            <li className="hover:underline cursor-pointer">
              <Link to="/">Star Wars</Link>
            </li>
            <li className="hover:underline cursor-pointer">
              <Link to="/pokemon">Pokemón</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
