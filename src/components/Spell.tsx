import { Champion } from "@/types/Champions";
import React from "react";

function Spell({ spells }: { spells: Champion[] }) {
  return (
    <div>
      <div>{spells.name}</div>
      <div>{spells.description}</div>
    </div>
  );
}

export default Spell;
