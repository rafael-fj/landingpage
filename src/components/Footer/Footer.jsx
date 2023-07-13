/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Botton } from "../Botton";
import "./style.css";

export const Footer = ({ className, group = "/img/group-5367.png", href, href1, href2, href3, href4, href5 }) => {
  return (
    <div className={`footer ${className}`}>
      <div className="group-11">
        <Botton
          className="botton-instance"
          contactClassName="design-component-instance-node"
          href={href}
          text="Submit"
        />
        <div className="overlap">
          <input className="input" />
        </div>
        <div className="overlap-group">
          <input className="input" />
        </div>
        <div className="type-your-message-wrapper">
          <input className="type-your-message" />
        </div>
      </div>
      <div className="overlap-2">
        <div className="group-12">
          <div className="lets-work-together">Lets work together</div>
          <p className="this-is-a-template-7">
            This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com This is a template
            Figma file, turned into code using Anima. Learn more at AnimaApp.com
          </p>
          <img className="group-13" alt="Group" src={group} />
        </div>
        <a className="discord" href={href1} rel="noopener noreferrer" target="_blank">
          A
        </a>
        <a className="facebook" href={href2} rel="noopener noreferrer" target="_blank">
          A
        </a>
        <a className="dribbble" href={href3} rel="noopener noreferrer" target="_blank">
          A
        </a>
        <a className="instagram" href={href4} rel="noopener noreferrer" target="_blank">
          A
        </a>
        <a className="behance" href={href5} rel="noopener noreferrer" target="_blank">
          A
        </a>
      </div>
    </div>
  );
};

Footer.propTypes = {
  group: PropTypes.string,
  href: PropTypes.string,
  href1: PropTypes.string,
  href2: PropTypes.string,
  href3: PropTypes.string,
  href4: PropTypes.string,
  href5: PropTypes.string,
};
