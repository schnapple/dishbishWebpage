import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Icons from "../../local-data/Icons";
import SubHeader from "../../components/SubHeader/SubHeader";
import RecipeListItem from "../../components/UI/RecipeListItem/RecipeListItem";
import CuisineIcon from "../../components/UI/CuisineIcon/CuisineIcon";
import ImageWithTitle from "../../components/UI/ImageWithTitle/ImageWithTitle";
import "./RecipeList.css";
import Colors from "../../constants/Colors";
import * as recipeActions from "../../store/actions/recipes";

const RecipeList = (props) => {
  const styles = {
    description: { color: Colors.offGray, fontSize: "20px" },
    header: { color: Colors.triad },
  };
  const [activeFilters, setActiveFilters] = useState([]);
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.recipes.filteredRecipes);

  const cuisineIconHandler = async (title, isSelected) => {
    let curFilter = activeFilters;
    if (isSelected) {
      curFilter.push(title.toLowerCase());
      setActiveFilters(curFilter);
    } else {
      let index = curFilter.indexOf(title.toLowerCase());
      curFilter.splice(index, 1);
      setActiveFilters(curFilter);
    }
    dispatch(recipeActions.filterRecipes(activeFilters));
  };

  const recipeSelectedHandler = (recipe) => {
    props.history.push({
      pathname: "/recipeDetail",
      data: recipe,
    });
  };

  useEffect(() => {
    dispatch(recipeActions.clearSearched());
  }, [dispatch]);

  let recipeList = recipes.map((recipe, index) => {
    return (
      <RecipeListItem
        recipe={recipe}
        key={index}
        gridVal={index}
        recipeSelected={recipeSelectedHandler}
      />
    );
  });

  let filterIconList = Icons.map((icon, index) => {
    return (
      <CuisineIcon
        title={icon.title}
        color={icon.color}
        path={icon.path}
        key={index}
        cuisineClickedHandler={cuisineIconHandler}
      />
    );
  });

  return (
    <div style={{ flex: 1, justifyContent: "center" }}>
      <Header history={props.history} />
      <SubHeader history={props.history} />
      <div className="Recipe-header-container">
        <ImageWithTitle
          title="THE RECIPES"
          imageUrl="https://firebasestorage.googleapis.com/v0/b/dishbishamy-8954a.appspot.com/o/plantPic.jpg?alt=media&token=2d98d4c2-2c9a-4226-a59f-a2414fb10dc6"
        />
      </div>
      <div className="Recipe-list-subheader" style={styles.description}>
        Browse our recipes and select our filters to get a specified list.
      </div>
      <div className="Cuisine-icons-container">
        <div className="Cuisine-icons">{filterIconList}</div>
      </div>

      <div className="Outer">
        <div className="Grid-container">{recipeList}</div>
      </div>
      <Footer history={props.history} />
    </div>
  );
};

export default RecipeList;
