import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Header from "../../components/Header/Header";
import SubHeader from "../../components/SubHeader/SubHeader";
import Footer from "../../components/Footer/Footer";
import "./AboutMe.css";
import Colors from "../../constants/Colors";
import * as recipeActions from "../../store/actions/recipes";

const AboutMe = (props) => {
  const dispatch = useDispatch();
  const styles = {
    headerStlye: {
      color: Colors.triad,
    },
  };

  useEffect(() => {
    dispatch(recipeActions.clearSearched());
  }, [dispatch]);

  return (
    <div>
      <Header history={props.history} />
      <SubHeader history={props.history} />
      <div className="About-content-container">
        <div className="About-image-container">
          <div className="About-header" style={styles.headerStlye}>
            Who am I?
          </div>
          <img
            className="About-image"
            alt="new"
            src="https://firebasestorage.googleapis.com/v0/b/dishbishamy-8954a.appspot.com/o/amyInAndOut.jpg?alt=media&token=6fd7bed2-d89e-40d4-94ea-d747252250d6"
          />
        </div>
        <div className="About-body-container">
          <div className="About-body">
            Plain and simple, I like to eat! I've been making dishes for my
            friends and family as long as I could remember! I was alyways trying
            to expand my cuisine horizon. So that brings us to the beginning of
            my foodie career! I started looking for new exotic dishes from
            around the globe, reaching far and wide. After traveling to various
            coutries and talking with anyone with a bowl and a garlic press I
            have built up a line of dishes that truley are jaw dropping and now
            is the time for them to be shared with the world! Feel free to
            recreate, edit or just look at any of these dishes. Oh one last
            thing! Everyone always asks me what does Dish Bish mean? Well if you
            have a meal made by yours truley your gonna be saying "Dis-Bitch"!
          </div>
        </div>
      </div>

      <Footer history={props.history} />
    </div>
  );
};

export default AboutMe;
