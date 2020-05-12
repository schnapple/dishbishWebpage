import * as actionTypes from "./actionTypes";
import firebase from "firebase";
import Recipe from "../../models/Recipe";

export const setRecipe = (recipe) => {
  return {
    type: actionTypes.SET_RECIPE,
    recipe: recipe,
  };
};

export const filterRecipes = (activeFilters) => {
  return async (dispatch, getState) => {
    const filteredRecipes = [];
    const recipes = getState().recipes.recipes;
    recipes.forEach((recipe) => {
      let recipesTags = recipe.tags;
      const result = activeFilters.every((val) =>
        recipesTags.includes(val.toLowerCase())
      );
      if (result) {
        filteredRecipes.push(recipe);
      }
    });
    if (activeFilters.length === 0) {
      dispatch({
        type: actionTypes.SET_FILTER_RECIPES,
        recipes: recipes,
      });
    } else {
      console.log(filteredRecipes);
      dispatch({
        type: actionTypes.SET_FILTER_RECIPES,
        recipes: filteredRecipes,
      });
    }
  };
};

export const fetchRecipes = () => {
  return async (dispatch) => {
    try {
      var recipesRef = firebase
        .database()
        .ref("1gr8Nt7dkukh97jsDpKZX8urOU8H0CrDz7RH_EAPDFkc/recipes/");
      recipesRef.on("value", function (snap) {
        const loadedRecipes = [];
        const favRecipes = [];
        const newRecipes = [];

        for (const key in snap.val()) {
          let ingredients = snap.val()[key].ingredients.split("|");
          let instructions = snap.val()[key].instructions.split("|");
          let tags = snap.val()[key].tags.split("|");
          const curRecipe = new Recipe(
            snap.val()[key].title,
            snap.val()[key].imageUrl,
            ingredients,
            snap.val()[key].description,
            instructions,
            snap.val()[key].summary,
            tags,
            snap.val()[key].isNew,
            snap.val()[key].isFav
          );
          loadedRecipes.push(curRecipe);
          if (curRecipe.isNew) {
            newRecipes.push(curRecipe);
          }
          if (curRecipe.isFav) {
            favRecipes.push(curRecipe);
          }
        }

        dispatch({
          type: actionTypes.FETCH_RECIPE,
          recipes: loadedRecipes,
        });
        dispatch({
          type: actionTypes.FETCH_FAVS,
          recipes: favRecipes,
        });
        dispatch({
          type: actionTypes.FETCH_NEWS,
          recipes: newRecipes,
        });
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export const searchRecipes = (val) => {
  return async (dispatch, getState) => {
    const searchedRecipes = [];
    if (val === "") {
      dispatch({
        type: actionTypes.SET_SEARCHED_RECIPES,
        recipes: searchedRecipes,
      });
      return;
    }
    const recipes = getState().recipes.recipes;
    recipes.forEach((recipe) => {
      if (recipe.title.toLowerCase().includes(val.toLowerCase())) {
        searchedRecipes.push(recipe);
      }
    });

    dispatch({
      type: actionTypes.SET_SEARCHED_RECIPES,
      recipes: searchedRecipes,
    });
  };
};

export const clearSearched = () => {
  return async (dispatch) => {
    dispatch({
      type: actionTypes.CLEARED_SEARCH,
    });
  };
};
