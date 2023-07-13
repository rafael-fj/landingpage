/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Botton = ({ className, contactClassName, text = "Contact", href }) => {
  return (
    <div className={`botton ${className}`}>
      <a className={`contact-2 ${contactClassName}`} href={href} rel="noopener noreferrer" target="_blank">
        {text}
      </a>
    </div>
  );
};

Botton.propTypes = {
  text: PropTypes.string,
  href: PropTypes.string,
};
