/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { ClientCard } from "../ClientCard";
import { Logos } from "../Logos";
import "./style.css";

export const Clients = ({ property1, className, logosLogos = "/img/logos-1280-2.png" }) => {
  return (
    <div className={`clients ${property1} ${className}`}>
      {property1 === "brands-1280" && <Logos className="logos-1280" logos={logosLogos} />}

      {["clients-1280-1", "clients-1280-2"].includes(property1) && (
        <>
          <div className="text-wrapper">Clients</div>
          <div className="group">
            {property1 === "clients-1280-1" && (
              <>
                <ClientCard
                  className="client-card-1280"
                  ellipse="/img/ellipse-159-7.png"
                  img="/img/star-28.png"
                  property1="default"
                  star="/img/star-29.png"
                  star1="/img/star-27.png"
                  star2="/img/star-26.png"
                  star3="/img/star-25.png"
                />
                <ClientCard
                  className="client-card-instance"
                  ellipse="/img/ellipse-159-6.png"
                  img="/img/star-28.png"
                  property1="default"
                  star="/img/star-29.png"
                  star1="/img/star-27.png"
                  star2="/img/star-26.png"
                  star3="/img/star-25.png"
                />
                <ClientCard
                  className="client-card-1280-instance"
                  ellipse="/img/ellipse-159-5.png"
                  img="/img/star-28.png"
                  property1="default"
                  star="/img/star-29.png"
                  star1="/img/star-27.png"
                  star2="/img/star-26.png"
                  star3="/img/star-25.png"
                />
              </>
            )}

            {property1 === "clients-1280-2" && (
              <>
                <div className="gemma-nolen-google">
                  Gemma Nolen, <br />
                  Google
                </div>
                <p className="this-is-a-template">
                  This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com This is a
                  template Figma file, turned into code using Anima. Learn more at AnimaApp.com
                </p>
                <div className="div">
                  <div className="star">
                    <img className="img" alt="Star" src="/img/star-24.png" />
                  </div>
                  <div className="star-wrapper">
                    <img className="img" alt="Star" src="/img/star-23.png" />
                  </div>
                  <div className="img-wrapper">
                    <img className="img" alt="Star" src="/img/star-22.png" />
                  </div>
                  <div className="star-2">
                    <img className="img" alt="Star" src="/img/star-21.png" />
                  </div>
                  <div className="star-3">
                    <img className="img" alt="Star" src="/img/star-20.png" />
                  </div>
                </div>
                <img className="ellipse" alt="Ellipse" src="/img/ellipse-160.png" />
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
};

Clients.propTypes = {
  property1: PropTypes.oneOf(["clients-1280-2", "brands-1280", "clients-1280-1"]),
  logosLogos: PropTypes.string,
};
