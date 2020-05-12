import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Header from "../../components/Header/Header";
import SubHeader from "../../components/SubHeader/SubHeader";
// import localStorage from "localStorage";
import Footer from "../../components/Footer/Footer";
import "./RecipeDetail.css";
import Colors from "../../constants/Colors";
import * as recipeActions from "../../store/actions/recipes";

const RecipeDetail = (props) => {
  // in-file, doesn't call `String(val)` on values (default)
  const dispatch = useDispatch();
  const styles = {
    title: {
      color: Colors.triad,
    },
    subHeader: {
      color: Colors.accent,
    },
  };

  let recipe;
  if (props.location.data) {
    localStorage.setItem("recipe", JSON.stringify(props.location.data));
    recipe = props.location.data;
  } else {
    recipe = JSON.parse(localStorage.getItem("recipe"));
  }

  const ingredientList = recipe.ingredients.map((ingredient, index) => {
    return (
      <div className="Ingredient-item" key={index}>
        {ingredient}
      </div>
    );
  });

  const instructionList = recipe.instructions.map((instruction, index) => {
    return (
      <div className="Instruction-item" key={index}>
        {instruction}
      </div>
    );
  });

  useEffect(() => {
    dispatch(recipeActions.clearSearched());
  }, [dispatch]);

  return (
    <div style={{ flex: 1, justifyContent: "center" }}>
      <Header history={props.history} />
      <SubHeader history={props.history} />
      <div className="Recipe-detail-title" style={styles.title}>
        {recipe.title}
      </div>
      <div className="Recipe-detail-container">
        <div className="Recipe-detail-summary">{recipe.recipe}</div>
        <img className="Recipe-detail-image" src={recipe.imageUrl} alt="new" />
      </div>
      <hr style={{ width: "80%", opacity: 0.1 }} />
      <div className="Detail-container">
        <div className="Ingredients-container">
          <div className="Recipe-detail-header" style={styles.subHeader}>
            Igredients
          </div>
          {ingredientList}
        </div>
        <div className="Instructions-container">
          <div className="Recipe-detail-header" style={styles.subHeader}>
            Instruction
          </div>
          {instructionList}
        </div>
      </div>
      <Footer history={props.history} />
    </div>
  );
};

export default RecipeDetail;
