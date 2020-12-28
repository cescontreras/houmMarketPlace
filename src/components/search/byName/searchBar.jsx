import React, { useState } from "react";
import Zoom from "react-reveal/Zoom";
import "./searchBar.css";

export default function SearchBar({
	getByName,
	getRefs,
	setFilter,
	setShowTypes,
	showTypes,
}) {
	const [name, setName] = useState("");

	const handleName = (e) => {
		const name = e.target.value.toLowerCase();
		setName(name);
	};

	const get = async () => {
		setFilter(true);
		await getByName(name);
	};

	const showAll = () => {
		setFilter(false);
		getRefs();
	};

	return (
		<Zoom>
			<div className="searchInput">
				<label id="gotta">Gotta Catch'em All</label>
				<div className="input-group mb-3 searchForm">
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
				<div className="buttons">
					<button
						className="btn btn-primary shadow-lg filterButton"
						onClick={() => showAll()}
					>
						Show All
					</button>
					{showTypes ? (
						<button
							className="btn btn-primary shadow-lg filterButton"
							onClick={() => setShowTypes(!showTypes)}
						>
							Hide Types
						</button>
					) : (
						<button
							className="btn btn-primary shadow-lg filterButton"
							onClick={() => setShowTypes(!showTypes)}
						>
							Show Types
						</button>
					)}
				</div>
			</div>
		</Zoom>
	);
}
