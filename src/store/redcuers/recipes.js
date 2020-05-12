import * as actionTypes from "../actions/actionTypes";

const initialState = {
  recipes: [],
  filteredRecipes: [],
  searchedRecipes: [],
  favRecipes: [],
  newRecipes: [],
  selectedRecipe: null,
};

const recipeReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_RECIPE:
      return { ...state, selectedRecipe: action.recipe };
    case actionTypes.FETCH_RECIPE:
      return {
        ...state,
        recipes: action.recipes,
        filteredRecipes: action.recipes,
      };
    case actionTypes.FETCH_FAVS:
      return { ...state, favRecipes: action.recipes };
    case actionTypes.FETCH_NEWS:
      return { ...state, newRecipes: action.recipes };
    case actionTypes.SET_FILTER_RECIPES:
      return { ...state, filteredRecipes: action.recipes };
    case actionTypes.SET_SEARCHED_RECIPES:
      return { ...state, searchedRecipes: action.recipes };
    case actionTypes.CLEARED_SEARCH:
      return { ...state, searchedRecipes: [] };
    default:
      return state;
  }
};

export default recipeReducer;
