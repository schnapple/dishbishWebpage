import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { IoIosSearch } from "react-icons/io";
import SearchItem from "../SearchItem/SearchItem";
import "./SearchBar.css";
import * as recipeActions from "../../store/actions/recipes";

const SearchBar = (props) => {
  // const dispatch = useDispatch();
  const recipes = useSelector((state) => state.recipes.searchedRecipes);
  const dispatch = useDispatch();

  const changeHandler = (event) => {
    dispatch(recipeActions.searchRecipes(event.target.value));
  };

  let searchedList = recipes.map((recipe, index) => {
    return (
      <SearchItem
        key={index}
        history={props.history}
        gridVal={index}
        recipeSelected={props.recipeSelected}
        recipe={recipe}
      />
    );
  });

  return (
    <div className="Search-bar-container">
      <div className="Search-bar-input-container">
        <input
          className="Search-bar-input"
          placeholder="SEARCH"
          onChange={changeHandler}
        >
          {props.title}
        </input>
        <IoIosSearch color="black" size="1.5em" />
      </div>
      <div className="Search-bar-result">{searchedList}</div>
    </div>
  );
};

export default SearchBar;
