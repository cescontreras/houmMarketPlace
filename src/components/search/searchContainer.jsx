import React from "react";
import SearchBar from "./byName/searchBar";
import Filter from "./filter/filter";
import "./searchContainer.css";

export default function Search({getByName, clear, setFilter}) {

	return (
		<div className="searchContainer">
      <SearchBar getByName={getByName} clear={clear} setFilter={setFilter}/>			
			<Filter />
		</div>
	);
}
