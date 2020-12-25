import React, { useState, useEffect } from "react";
import SearchBar from "./byName/searchBar";
import Filter from "./filter/filter";
import "./searchContainer.css";

export default function Search() {

	return (
		<div className="searchContainer">
      <SearchBar />
			<Filter />
		</div>
	);
}
