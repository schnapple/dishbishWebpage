import React from "react";
// import { useDispatch } from "react-redux";
import Fade from "react-reveal/Fade";
import "./ImageWithTitle.css";

const ImageWithTitle = (props) => {
  const styles = {
    imageContainer: {
      backgroundImage: `url(${props.imageUrl})`,
      color: "white",
    },
  };

  return (
    <div className="Image-with-title-container">
      <Fade bottom>
        <div className="Static-image-with-title" style={styles.imageContainer}>
          {props.title}
        </div>
      </Fade>
    </div>
  );
};

export default ImageWithTitle;
