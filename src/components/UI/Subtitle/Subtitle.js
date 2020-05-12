import React from "react";
import Fade from "react-reveal/Fade";
import "./Subtitle.css";
import Colors from "../../../constants/Colors";

const Subtitle = props => {
  return (
    <div className="Subtitle-container">
      <Fade big>
        <div className="Subtitle-title" style={{ color: Colors.triad }}>
          {props.title}
        </div>
      </Fade>
    </div>
  );
};

export default Subtitle;
