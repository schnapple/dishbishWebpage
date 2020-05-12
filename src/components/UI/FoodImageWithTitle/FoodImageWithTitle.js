import React from "react";
// import { useDispatch } from "react-redux";
import Fade from "react-reveal/Fade";
import "./FoodImageWithTitle.css";
// import * as recipeActions from "../../../store/actions/recipes";

const FoodImageWithTitle = (props) => {
  // const dispatch = useDispatch();
  const styles = {
    imageContainer: {
      backgroundImage: `url(${props.recipe.imageUrl})`,
    },
  };

  const recipeSelectedHandler = () => {
    // dispatch(recipeActions.setRecipe(props.recipe));
    props.recipeSelected(props.recipe);
  };

  return (
    <div className="Image-with-title-container">
      <Fade bottom>
        <div
          className="Image-with-title"
          style={styles.imageContainer}
          onClick={recipeSelectedHandler}
        >
          {props.recipe.title}
        </div>
      </Fade>
    </div>
  );
};

export default FoodImageWithTitle;
