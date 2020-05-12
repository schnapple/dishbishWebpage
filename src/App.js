import React, { useState, useEffect } from "react";
// import logo from "./logo.svg";
// import Box from "@material-ui/core/Box";
import { useDispatch } from "react-redux";
import Home from "./containers/Home/Home";
import RecipeDetail from "./containers/RecipeDetail/RecipeDetail";
import RecipeList from "./containers/RecipeList/RecipeList";
import AboutMe from "./containers/AboutMe/AboutMe";
import { Route, Switch } from "react-router-dom";
import * as recipeActions from "./store/actions/recipes";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    dispatch(recipeActions.fetchRecipes()).then(() => {
      setIsLoading(false);
    });
  }, [dispatch]);

  if (isLoading) {
    return <div>HELLO</div>;
  } else {
    return (
      <div className="App">
        <Switch>
          <Route path="/recipeDetail" component={RecipeDetail} />
          <Route path="/recipeList" component={RecipeList} />
          <Route path="/About" exact component={AboutMe} />
          <Route path="/" exact component={Home} />
        </Switch>
      </div>
    );
  }
}

export default App;
