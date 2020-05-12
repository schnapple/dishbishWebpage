import React, { useState } from "react";
import "./CuisineIcon.css";

const CuisineIcon = props => {
  const [isSelected, setIsSelected] = useState(true);
  const itemSelectedHandler = async () => {
    await setIsSelected(prevState => !prevState);
    isSelected
      ? (document.getElementById(props.title).style.borderColor = props.color)
      : (document.getElementById(props.title).style.borderColor = "white");
    props.cuisineClickedHandler(props.title, isSelected);
  };

  let image = null;
  switch (props.title) {
    case "Vegan":
      image = require("../../../assests/icons8-vegan-symbol-90.png");
      break;
    case "Vegetarian":
      image = require("../../../assests/icons8-vegetarian-food-symbol-96.png");
      break;
    case "Dinner":
      image = require("../../../assests/icons8-dinner-100.png");
      break;
    case "Lunch":
      image = require("../../../assests/icons8-lunchbox-90.png");
      break;
    case "Breakfast":
      image = require("../../../assests/icons8-buffet-breakfast-96.png");
      break;
    case "Snack":
      image = require("../../../assests/icons8-vending-machine-100.png");
      break;

    default:
      image = null;
  }
  return (
    <div className="row App-header">
      <div className="Cuisine-icon-container">
        <div id={props.title} className="Cuisine-icon-image-container">
          <img
            src={image}
            style={{ backgroundColor: props.color }}
            alt={props.title}
            className="Cuisine-icon-image"
            onClick={() => {
              itemSelectedHandler();
            }}
          />
        </div>
        <span className="Cuisine-icon-text">{props.title}</span>
      </div>
    </div>
  );
};

export default CuisineIcon;
