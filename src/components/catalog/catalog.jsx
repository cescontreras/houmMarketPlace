import React, { useState } from "react";
import Card from "./card/card";
import Paginate from "../paginate/paginate";
import "./catalog.css";

export default function Catalog({pokemons, nextPage, prevPage, setCurrentPage}) {

	const [loading, setLoading] = useState(true)
	return (
		<div className="catalogContainer">		
			<Paginate
				prevPage={prevPage}
				nextPage={nextPage}
				setCurrentPage={setCurrentPage}
			/>
			<div className="catalog">
				{pokemons.length ? 
					pokemons.map((p, i) => <Card pokemon={p} key={`${p.name}${i}`} />)
					:
					<h2 id="noPokemons">No Pokemons</h2>
				}
			</div>
      <Paginate
				prevPage={prevPage}
				nextPage={nextPage}
				setCurrentPage={setCurrentPage}
			/>
		</div>
	);
}
