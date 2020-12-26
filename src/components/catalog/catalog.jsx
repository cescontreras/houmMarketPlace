import React from "react";
import Card from "./card/card"
import "./catalog.css";

export default function Catalog({pokemons}) {

  return (
    <div className="catalog">
      <h1>CATALOG</h1>
      {/* {
        pokemons && pokemons.map((p, i) => (
          <Card pokemon={p} key={`${p.name}${i}`}/>

        ))
      } */}
      <Card />
    </div>
  )
}