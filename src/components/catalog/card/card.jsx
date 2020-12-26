import React, { useState } from "react";
import mock from "./mock";
import { capitalize } from "../../../helpers/helpers";
import "./card.css";

export default function Card(props) {
	// const p = props.pokemon;
	const p = mock;
	const [heldItems, setHeldItems] = useState([])

	return (
		<div className="cardContainer">
			<div className="pokemonCard">
				<div className="cardHeader">
					<label id="pokemonName">
						{capitalize(p.name)}
						<label id="pokemonType">({p.types[0].type.name})</label>
					</label>
					<label id="HP">{p.stats[0].base_stat} HP</label>
				</div>
				<div className="imageContainer">
					<img className="image" src={p.sprites.front_female}></img>
					<img className="image" src={p.sprites.back_female}></img>
				</div>
				<div className="pokemonHeldItems">
					<div className="heldItemImg">

					</div>
					<div className="heldItemInfo">

					</div>
				</div>
			</div>
		</div>
	);
}
