import {Characters} from "../types/characters";

import Card from "./Card";

export default function CardList({key, name, height, gender}: Characters & {key: string}) {
  return (
    <li key={name}>
      {/* Card */}
      <Card gender={gender} height={height} name={name} />
    </li>
  );
}
