import { Image } from "react-bootstrap";
import React from "react";

import "./ImageOverlay.css";

const ImageOverlay = (props) => {
  return props.image ? (
    <div className="overlay" onClick={props.closeOverlay}>
      <div className="close-button-container">
        <i className="fas fa-times" />
      </div>
      <div>
        <Image src={props.image} rounded className="image" />
      </div>
    </div>
  ) : null;
};

export default ImageOverlay;
