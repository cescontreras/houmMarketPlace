import React from "react";
import Card from "./card/card"
import "./catalog.css";

export default function Catalog({pokemons}) {

  return (
    <div className="catalog">
      {
        pokemons && pokemons.map((p, i) => (
          <Card pokemon={p} key={`${p.name}${i}`}/>
        ))
      }
    </div>
  )
}