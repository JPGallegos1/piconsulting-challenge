import {Characters} from "../types/characters";

import Card from "./Card";

export default function CardList({name, height, gender}: Characters & {index: number}) {
  return (
    <li>
      {/* Card */}
      <Card gender={gender} height={height} name={name} />
    </li>
  );
}
