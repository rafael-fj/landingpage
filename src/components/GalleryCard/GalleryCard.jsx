/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const GalleryCard = ({ className, rectangle = "/img/rectangle-1181-6.png" }) => {
  return (
    <div className={`gallery-card ${className}`}>
      <div className="project-title">Project title</div>
      <div className="UI-art-drection">UI, Art drection</div>
      <img className="rectangle" alt="Rectangle" src={rectangle} />
    </div>
  );
};

GalleryCard.propTypes = {
  rectangle: PropTypes.string,
};
