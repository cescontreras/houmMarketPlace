import React, { useState } from "react";
import Zoom from "react-reveal/Zoom";
import { Link, animateScroll as scroll } from "react-scroll";
import "./searchBar.css";

export default function SearchBar({
	getByName,
	getRefs,
	setFilter,
	setShowTypes,
	showTypes,
}) {
	const [name, setName] = useState("");
	const [validationError, setValidationError] = useState(false);

	const handleName = (e) => {
		const name = e.target.value.toLowerCase();
		setName(name);
	};

	const get = async () => {
		if (name) {
			setFilter(true);
			await getByName(name);
		} else {
			setValidationError(true);
		}
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
						className={
							validationError
								? "form-control searchForm error"
								: "form-control searchForm"
						}
						placeholder={
							validationError ? "Must Type a Name !!" : "Find your Pokemon !! ..."
						}
						aria-describedby="button-addon2"
					/>
					<Link
						to="catalog"
						className="btn btn-outline-secondary searchButton"
						type="button"
						id="button-addon2"
						onClick={() => get()}
					></Link>
				</div>
				<div className="buttons">
					<Link
						to="catalog"
						className="btn btn-primary shadow-lg filterButton"
						onClick={() => showAll()}
					>
						Show All
					</Link>
					{showTypes ? (
						<button
							className="btn btn-primary shadow-lg filterButton showTypes"
							onClick={() => setShowTypes(!showTypes)}
						>
							Hide Types
						</button>
					) : (
						<button
							className="btn btn-primary shadow-lg filterButton showTypes"
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
