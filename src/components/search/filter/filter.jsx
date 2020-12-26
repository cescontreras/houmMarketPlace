import React, { useState, useEffect } from "react";
import LightSpeed from "react-reveal/LightSpeed";
import axios from "axios";
import {capitalize} from "../../../helpers/helpers"
import "./filter.css";

export default function Filter({ filter }) {
	const [types, setTypes] = useState([]);

	const getTypes = async () => {
		const { data } = await axios.get("https://pokeapi.co/api/v2/type");
		setTypes(data.results);
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
