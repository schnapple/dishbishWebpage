import React from "react";
import { useDispatch } from "react-redux";
import { IoLogoInstagram } from "react-icons/io";
import "./Header.css";
import SearchBar from "../SearchBar/SearchBar";
import Colors from "../../constants/Colors";
import * as recipeActions from "../../store/actions/recipes";

const Header = (props) => {
  const dispatch = useDispatch();
  const homeSelectedHandler = () => {
    props.history.push({
      pathname: "/",
    });
  };

  const recipeSelectedHandler = (recipe) => {
    dispatch(recipeActions.clearSearched());
    props.history.push({
      pathname: "/recipeDetail",
      data: recipe,
    });
  };

  const styles = {
    primary: { color: Colors.accent },
    accent: { color: Colors.primary },
  };

  return (
    <header className="row App-header">
      <div className="Icon-circle-container">
        <div
          className="Icon-circle"
          yarn 
        >
          <IoLogoInstagram color="white" size="2em" />
        </div>
      </div>
      <div className="Header-title-container" onClick={homeSelectedHandler}>
        <div className="Header-title" style={styles.accent}>
          Dish Bish
        </div>
        <div className="Header-title-amy-container">
          <div className="Horizontal-line" />
          <div className="Header-title-amy" style={styles.accent}>
            AMY
          </div>
          <div className="Horizontal-line" />
        </div>
      </div>
      <SearchBar
        history={props.history}
        recipeSelected={recipeSelectedHandler}
      />
    </header>
  );
};

export default Header;
