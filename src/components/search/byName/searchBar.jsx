import React from "react";
import "./searchBar.css";


export default function SearchBar() {

  return (
    <div className="searchInput">
				<div className="input-group mb-3">
					<button
						className="btn btn-outline-secondary searchButton"
						type="button"
						id="button-addon2"
					></button>
					<input
						type="text"
						className="form-control searchForm"
						placeholder="Find your Pokemon !! ..."
						aria-describedby="button-addon2"
					/>
				</div>
			</div>
  )
}