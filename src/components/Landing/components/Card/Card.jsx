import React from "react";
import "./Card.css";

const Card = ({grid, heading}) => {
  return (
    <div className="card"> 
      <img src={grid} alt="" />
      <span>{heading}</span>
    </div>
  );
};

export default Card;
