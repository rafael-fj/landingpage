/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Cards } from "../Cards";
import "./style.css";

export const Skills = ({
  property1,
  className,
  cardsCardClassName,
  cardsCardClassNameOverride,
  cardsFrameWrapperClassName,
}) => {
  return (
    <div className={`skills ${property1} ${className}`}>
      {property1 === "skills-1280-1" && (
        <Cards
          cardClassName={cardsCardClassName}
          cardClassNameOverride={cardsCardClassNameOverride}
          className="cards-instance"
          frameWrapperClassName={cardsFrameWrapperClassName}
          group="/img/group-5357-2.png"
          group1="/img/group-5360-2.png"
          img="/img/group-5359-2.png"
        />
      )}

      {property1 === "skills-1280-2" && (
        <div className="group-5">
          <img className="group-6" alt="Group" src="/img/group-5352.png" />
          <img className="group-7" alt="Group" src="/img/group-5353.png" />
          <img className="group-8" alt="Group" src="/img/group-5355.png" />
          <img className="group-9" alt="Group" src="/img/group-5354.png" />
          <div className="product-design-2">Product design</div>
          <div className="art-direction-2">Art direction</div>
          <div className="UI-design-kit">UI design kit</div>
          <div className="visual-design-2">Visual design</div>
          <p className="this-is-a-template-2">
            This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com
          </p>
          <p className="this-is-a-template-3">
            This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com
          </p>
          <p className="this-is-a-template-4">
            This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com
          </p>
          <p className="this-is-a-template-5">
            This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com
          </p>
        </div>
      )}
    </div>
  );
};

Skills.propTypes = {
  property1: PropTypes.oneOf(["skills-1280-1", "skills-1280-2"]),
};
