import React, { useState } from "react";
import Zoom from "react-reveal/Zoom";
import "./searchBar.css";

export default function SearchBar({getByName, clear, setFilter}) {

	const [name, setName] = useState('');

	const handleName = (e) => {
		const name = e.target.value.toLowerCase()
		setName(name)
	}	

	const get = async () => {
		setFilter({status: true, filter: "name"})
		await getByName(name)
	}		

	return (
		<Zoom>
			<div className="searchInput">
				<label id="gotta">Gotta Catch'em All</label>
				<div className="input-group mb-3">					
					<input
						onChange={(e) => handleName(e)}
						type="text"
						className="form-control searchForm"
						placeholder="Find your Pokemon !! ..."
						aria-describedby="button-addon2"
					/>
					<button
						className="btn btn-outline-secondary searchButton"
						type="button"
						id="button-addon2"
						onClick={() => get()}
					></button>
				</div>
				<button >Clear</button>
				<button >Filter by Type</button>
			</div>
		</Zoom>
	);
}
