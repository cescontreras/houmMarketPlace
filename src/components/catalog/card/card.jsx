import React from "react";
import mock from "./mock"
import "./card.css"

export default function Card(props) {
  // const p = props.pokemon;
  const p = mock

	return (
		<div className="cardContainer">
			<div className="pokemonCard">
        <div className="cardHeader">
				<label>{p.name}</label>
				<label>HP</label> 
        </div>  
        <div>
          <img>
        </div>     
			</div>
		</div>
	);
}
