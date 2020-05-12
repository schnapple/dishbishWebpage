import React from "react";
import { useDispatch } from "react-redux";
import "./Footer.css";
import Colors from "../../constants/Colors";
import * as recipeActions from "../../store/actions/recipes";

const Footer = (props) => {
  const dispatch = useDispatch();
  const styles = {
    category: { color: Colors.triad },
    categoryItem: { color: Colors.accent },
    endingWords: {
      color: Colors.offBlack,
      fontSize: "10px",
      fontWeight: "bold",
    },
  };

  const localLinkedClickedHandler = (link) => {
    dispatch(recipeActions.clearSearched());
    props.history.push({
      pathname: link,
    });
  };

  const socials = [
    { title: "Instagram", link: "https://www.instagram.com/dishbishamy/" },
  ];
  let socialsList = socials.map((social, index) => {
    return (
      <div
        className="Footer-list-item"
        key={index}
        style={styles.categoryItem}
        onClick={() => window.open(social.link, "_blank")}
      >
        {social.title}
      </div>
    );
  });

  const recipes = [{ title: "All Recipes", link: "recipeList" }];
  let recipesList = recipes.map((recipe, index) => {
    return (
      <div
        className="Footer-list-item"
        key={index}
        style={styles.categoryItem}
        onClick={() => {
          localLinkedClickedHandler(recipe.link);
        }}
      >
        {recipe.title}
      </div>
    );
  });

  return (
    <footer className="App-footer">
      {/* <div className="Thanks-for-visiting">
        <div className="Thanks-for-visiting-header">THANKS FOR STOPPING BY</div>
        <div className="Thanks-for-visiting-break">and</div>
        <div className="Thanks-for-visiting-header">JUST KEEP EATING!</div>
      </div> */}
      <hr style={{ width: "90%", opacity: 0.1 }} />
      <div className="row Link-container">
        <div className="Footer-clickable-list">
          <div className="Footer-list-header" style={styles.category}>
            RECIPES
          </div>
          {recipesList}
        </div>
        <div className="Footer-clickable-list">
          <div className="Footer-list-header" style={styles.category}>
            SOCIALS
          </div>
          {socialsList}
        </div>
      </div>
      <hr style={{ width: "90%", opacity: 0.1 }} />
      <div className="row Created-by-line">
        <div style={styles.endingWords}>Made by Phil LaGambino</div>
        <div style={styles.endingWords}>2020 Food Craze</div>
      </div>
    </footer>
  );
};

export default Footer;
