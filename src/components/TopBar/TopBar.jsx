/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const TopBar = ({
  property1,
  className,
  logoClassName,
  aboutClassName,
  workClassName,
  contactClassName,
  href,
  href1,
  href2,
  href3,
}) => {
  return (
    <div className={`top-bar ${property1} ${className}`}>
      <a className={`logo ${logoClassName}`} href={href} rel="noopener noreferrer" target="_blank">
        Logo
      </a>
      <a className={`about ${aboutClassName}`} href={href1} rel="noopener noreferrer" target="_blank">
        About
      </a>
      <a className={`work ${workClassName}`} href={href2} rel="noopener noreferrer" target="_blank">
        Work
      </a>
      <a className={`contact ${contactClassName}`} href={href3} rel="noopener noreferrer" target="_blank">
        Contact
      </a>
    </div>
  );
};

TopBar.propTypes = {
  property1: PropTypes.oneOf(["top-bar-3", "top-bar-2", "default"]),
  href: PropTypes.string,
  href1: PropTypes.string,
  href2: PropTypes.string,
  href3: PropTypes.string,
};
