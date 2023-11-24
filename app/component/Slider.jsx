import React from "react";
import Card from "./Card";
import { cards } from "../semicard";
 
function Slider() {
  return (
    <div className="slider">
      <div className="card-container">
       {
         cards.map((card)=>(
            <Card 
                key={card.id}
                name={card.name}
                src={card.img}
                color={card.color}
            />
         ))
       }
      </div>
      <div className="card-container">
      {
         cards.map((card)=>(
            <Card 
                key={card.id}
                name={card.name}
                src={card.img}
                color={card.color}
            />
         ))
       }
      </div>
    </div>
  );
}

export default Slider;
