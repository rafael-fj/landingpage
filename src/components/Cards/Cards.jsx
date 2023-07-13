/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Cards = ({
  className,
  cardClassName,
  group = "/img/group-5357-1.png",
  cardClassNameOverride,
  img = "/img/group-5359-1.png",
  frameWrapperClassName,
  group1 = "/img/group-5360-1.png",
}) => {
  return (
    <div className={`cards ${className}`}>
      <div className={`card ${cardClassName}`}>
        <div className="frame">
          <img className="group-2" alt="Group" src={group} />
          <div className="frame-2">
            <div className="product-design">Product design</div>
            <p className="p">This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com</p>
          </div>
        </div>
      </div>
      <div className={`frame-wrapper ${cardClassNameOverride}`}>
        <div className="frame-3">
          <img className="group-3" alt="Group" src={img} />
          <div className="frame-2">
            <div className="art-direction">Art direction</div>
            <p className="p">This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com</p>
          </div>
        </div>
      </div>
      <div className={`div-wrapper ${frameWrapperClassName}`}>
        <div className="frame-3">
          <img className="group-4" alt="Group" src={group1} />
          <div className="frame-2">
            <div className="visual-design">Visual design</div>
            <p className="p">This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

Cards.propTypes = {
  group: PropTypes.string,
  img: PropTypes.string,
  group1: PropTypes.string,
};
