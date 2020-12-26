import React from "react";

export default function Card(props) {
	const p = props.pokemon;
	const style = { width: "18rem", heigth: "25rem" };
	return (
		<div className="pokemonCard">
			<div className="card border-dark pokemonCard" style={style}>
				<div className="card-header">{p && p.name}</div>
				<div className="card-body text-dark">
					<h5 className="card-title">{p && p.name}</h5>
					<p className="card-text">{p && p.types[0].type.name}</p>
				</div>
			</div>
		</div>
	);
}
