import React from "react";
// import { useDispatch } from "react-redux";
import Fade from "react-reveal/Fade";
import "./FoodImageTitleBelow.css";
// import * as recipeActions from "../../../store/actions/recipes";

const FoodImageTitleBelow = props => {
  // const dispatch = useDispatch();

  const recipeSelectedHandler = () => {
    // dispatch(recipeActions.setRecipe(props.recipe));
    props.recipeSelected(props.recipe);
  };

  return (
    <div
      className="Image-title-below-container"
      onClick={recipeSelectedHandler}
    >
      <Fade bottom>
        <img
          className="Image-title-below-image"
          src={props.recipe.imageUrl}
          alt="new"
        />
        <div className="Image-title-below-title">{props.recipe.title}</div>
      </Fade>
    </div>
  );
};

export default FoodImageTitleBelow;
