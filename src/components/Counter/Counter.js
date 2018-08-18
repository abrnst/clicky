import React from "react";
import "./Counter.css";

const Counter = props => (
    <div className="container">
    <ul className="nav justify-content-end">
      <li className="nav-item">{props.rightWrong}</li>
      <li className="nav-item">Current Score: {props.score}</li>
      <li className="nav-item">Top Score: {props.topScore}</li>
    </ul>
    </div>
);

export default Counter;