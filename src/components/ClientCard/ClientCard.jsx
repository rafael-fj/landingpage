/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const ClientCard = ({
  property1,
  className,
  ellipse = "/img/ellipse-159-4.png",
  star = "/img/star-19.png",
  img = "/img/star-18.png",
  star1 = "/img/star-17.png",
  star2 = "/img/star-16.png",
  star3 = "/img/star-15.png",
}) => {
  return (
    <div className={`client-card ${className}`}>
      <div className={`gemma-nolen-google-2 property-1-2-${property1}`}>
        Gemma Nolen, <br />
        Google
      </div>
      <div className={`this-is-a-template-wrapper property-1-3-${property1}`}>
        <p className="this-is-a-template-6">
          This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com
        </p>
      </div>
      <img
        className={`ellipse-2 property-1-5-${property1}`}
        alt="Ellipse"
        src={property1 === "variant-2" ? "/img/ellipse-159-3.png" : ellipse}
      />
      {property1 === "default" && (
        <div className="group-10">
          <div className="star-4">
            <img className="star-5" alt="Star" src={star} />
          </div>
          <div className="star-6">
            <img className="star-5" alt="Star" src={img} />
          </div>
          <div className="star-7">
            <img className="star-5" alt="Star" src={star1} />
          </div>
          <div className="star-8">
            <img className="star-5" alt="Star" src={star2} />
          </div>
          <div className="star-9">
            <img className="star-5" alt="Star" src={star3} />
          </div>
        </div>
      )}
    </div>
  );
};

ClientCard.propTypes = {
  property1: PropTypes.oneOf(["variant-2", "default"]),
  ellipse: PropTypes.string,
  star: PropTypes.string,
  img: PropTypes.string,
  star1: PropTypes.string,
  star2: PropTypes.string,
  star3: PropTypes.string,
};
