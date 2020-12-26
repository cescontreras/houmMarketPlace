import React, { useState, useEffect } from "react";
import LightSpeed from "react-reveal/LightSpeed";
import axios from "axios";
import "./filter.css";

export default function Filter({ filter }) {
	const [types, setTypes] = useState([]);

	const getTypes = async () => {
		const { data } = await axios.get("https://pokeapi.co/api/v2/type");
		setTypes(data.results);
	};

	const capitalize = (str) => {
		return str.charAt(0).toUpperCase() + str.slice(1);
	};

	useEffect(() => {
		getTypes();
	}, []);

	return (
		<div className="filter">
			{types[0] &&
				types.map((type, i) => (
					<LightSpeed right key={i}>
						<button							
							type="button"
							value={type.name}
							className="btn btn-primary shadow-lg filterButton"
						>
							{capitalize(type.name)}
						</button>
					</LightSpeed>
				))}
		</div>
	);
}
