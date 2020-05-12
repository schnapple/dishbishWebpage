import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Header from "../../components/Header/Header";
import SubHeader from "../../components/SubHeader/SubHeader";
import Footer from "../../components/Footer/Footer";
import FoodImageTitleBelow from "../../components/UI/FoodImageTitleBelow/FoodImageTitleBelow";
import Subtitle from "../../components/UI/Subtitle/Subtitle";
import { Parallax } from "react-parallax";
import "./Home.css";
import * as recipeActions from "../../store/actions/recipes";

const Home = (props) => {
  const dispatch = useDispatch();
  const newRecipes = useSelector((state) => state.recipes.newRecipes);
  const favRecipes = useSelector((state) => state.recipes.favRecipes);
  const recipeSelectedHandler = (recipe) => {
    props.history.push({
      pathname: "/recipeDetail",
      data: recipe,
    });
  };

  let newRecipeImages = newRecipes.map((recipe, index) => {
    return (
      <FoodImageTitleBelow
        recipe={recipe}
        key={index}
        recipeSelected={recipeSelectedHandler}
      />
    );
  });

  let favRecipesImages = favRecipes.map((recipe, index) => {
    return (
      <FoodImageTitleBelow
        recipe={recipe}
        key={index}
        recipeSelected={recipeSelectedHandler}
      />
    );
  });

  useEffect(() => {
    dispatch(recipeActions.clearSearched());
  }, [dispatch]);

  return (
    <div>
      <Header history={props.history} />
      <SubHeader history={props.history} />
      <Subtitle title="NEW" />
      <div className="row New-image-containter">{newRecipeImages}</div>
      <Subtitle title="FAVS" />
      <div className="row New-image-containter">{favRecipesImages}</div>
      <Parallax
        className="HomeParallax"
        strength={500}
        bgImage={
          "https://firebasestorage.googleapis.com/v0/b/dishbishamy-8954a.appspot.com/o/tavlePicWide.jpg?alt=media&token=7dd934d6-760e-48d6-8dd8-6444209e86e7"
        }
      >
        <div style={{ height: 500 }} />
      </Parallax>
      <Footer history={props.history} />
    </div>
  );
};

export default Home;
