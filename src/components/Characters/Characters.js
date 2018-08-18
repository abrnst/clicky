import React from "react";
import "./Characters.css";

const CharacterCard = props => (
    <div className="container"
        value={props.id}
        onClick={() => props.handleClick(props.id)}>      
        <div className="card">
            <div className="img-container">
            <img alt={props.name} src={props.image} />
            </div>
        </div>
    </div>
);


export default CharacterCard;

