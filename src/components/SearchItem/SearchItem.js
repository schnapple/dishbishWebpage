import React from "react";
import "./SearchItem.css";

const SearchItem = (props) => {
  const recipeSelectedHandler = () => {
    props.recipeSelected(props.recipe);
  };

  let titleVal = props.recipe.title;
  if (titleVal.length > 20) {
    titleVal = titleVal.substring(0, 20) + "...";
  }

  return (
    <div className="Search-item-container" onClick={recipeSelectedHandler}>
      {titleVal}
    </div>
  );
};

export default SearchItem;
