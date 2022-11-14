import {Characters} from "../types/characters";

import Card from "./Card";

export default function CardList({name, height, gender, index}: Characters & {index: number}) {
  return (
    <li>
      {/* Card */}
      <Card gender={gender} height={height} index={index} name={name} />
    </li>
  );
}
