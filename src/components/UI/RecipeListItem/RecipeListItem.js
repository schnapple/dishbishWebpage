import React from "react";
import "./RecipeListItem.css";
import Colors from "../../../constants/Colors";

const RecipeListItem = props => {
  const styles = {
    title: { color: Colors.triad },
    description: { color: Colors.offBlack }
  };

  const recipeSelectedHandler = () => {
    props.recipeSelected(props.recipe);
  };

  return (
    <div className="Item-container" onClick={recipeSelectedHandler}>
      <img className="Image" src={props.recipe.imageUrl} alt="new" />
      <div className="Title" style={styles.title}>
        {props.recipe.title}
      </div>
      <div className="Description" style={styles.description}>
        {props.recipe.summary}
      </div>
    </div>
  );
};

export default RecipeListItem;
