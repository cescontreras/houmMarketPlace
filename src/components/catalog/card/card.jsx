import React, { useEffect, useState } from "react";
import mock from "./mock";
import { capitalize, toTitleCase } from "../../../helpers/helpers";
import "./card.css";
import axios from "axios";

export default function Card(props) {
	// const p = props.pokemon;
	const p = mock;
	const [heldItems, setHeldItems] = useState([]);
	const [abilities, setAbilities] = useState([]);

	const getItem = async (url) => {
		const { data } = await axios.get(url);
		return data;
	};

	const getHeldItems = async () => {
		return Promise.all(p.held_items.map((item) => getItem(item.item.url)));
	};

	const getAbilities = async () => {
		return Promise.all(
			p.abilities.map((ability) => getItem(ability.ability.url))
		);
	};

	const set = async () => {
		const heldItems = await getHeldItems();
		const abilities = await getAbilities();
		setHeldItems(heldItems);
		setAbilities(abilities);
	};

	useEffect(() => {
		p && set();
	}, []);

	return (
		<div className="cardContainer">
			<div className="pokemonCard">
				<div className="cardHeader">
					<label id="pokemonName">
						{capitalize(p.name)}
						<label id="pokemonType">({capitalize(p.types[0].type.name)})</label>
					</label>
					<label id="HP">{p.stats[0].base_stat} HP</label>
				</div>
				<div className="imageContainer">
					<img className="image" alt="" src={p.sprites.front_female}></img>
					<img className="image" alt="" src={p.sprites.back_female}></img>
				</div>
				<div className="pokemonInfo">
					<label className="wh">Height: {p.height * 10} Cm</label>
					<label className="wh">Weight: {p.weight / 10} Kg</label>
				</div>
				{heldItems &&
					heldItems.map((item, i) => (
						<div className="pokemonHeldItems" key={i}>
							<div className="heldItemImg">
								<img alt="" src={item.sprites.default}></img>
							</div>
							<div className="heldItemInfo">
								<label id="heldTitle">
									{toTitleCase(item.name)}
									<label id="heldCategory">({capitalize(item.category.name)})</label>
								</label>
								<label id="heldInfo">{item.flavor_text_entries[0].text}</label>
							</div>
						</div>
					))}

				{abilities &&
					abilities.map((ability, i) => (
						<div className="pokemonAbilities">
							<label>{ability.flavor_text_entries[0].flavor_text}</label>
						</div>
					))}
			</div>
		</div>
	);
}
