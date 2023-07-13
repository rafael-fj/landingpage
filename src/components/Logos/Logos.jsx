/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Logos = ({ className, logos = "/img/logos-1280-1.png" }) => {
  return <img className={`logos ${className}`} alt="Logos" src={logos} />;
};

Logos.propTypes = {
  logos: PropTypes.string,
};
