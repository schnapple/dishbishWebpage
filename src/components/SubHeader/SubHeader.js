import React from "react";
import "./SubHeader.css";
import Colors from "../../constants/Colors";

const SubHeader = props => {
  const styles = {
    textStlye: {
      color: Colors.accent
    }
  };

  const recipeListHandler = () => {
    props.history.push({
      pathname: "/recipeList"
    });
  };

  const aboutHandler = () => {
    props.history.push({
      pathname: "/about"
    });
  };

  return (
    <div className="Subheader-container">
      <div className="row App-body">
        <div
          className="Button-text"
          onClick={recipeListHandler}
          style={styles.textStlye}
        >
          Recipes
        </div>
        <div
          className="Button-text"
          onClick={aboutHandler}
          style={styles.textStlye}
        >
          About Me
        </div>
      </div>
      <hr style={{ width: "60%", opacity: 0.1, paddingBottom: "1vh" }} />
    </div>
  );
};

export default SubHeader;
