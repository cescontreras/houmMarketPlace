import React, {useState} from "react";
import SearchBar from "./byName/searchBar";
import Filter from "./filter/filter";
import "./searchContainer.css";

export default function Search({getByName, getRefs, setFilter,filterPokemons}) {

	const [showTypes, setShowTypes] = useState(false)

	return (
		<div className="searchContainer">
      <SearchBar getByName={getByName} getRefs={getRefs} setFilter={setFilter} setShowTypes={setShowTypes} showTypes={showTypes}/>			
			{
				showTypes &&
			<Filter setFilter={setFilter} filterPokemons={filterPokemons} showTypes={showTypes}/>
			}
		</div>
	);
}
