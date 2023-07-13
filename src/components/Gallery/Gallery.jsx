/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { GalleryCard } from "../GalleryCard";
import "./style.css";

export const Gallery = ({ property1, className }) => {
  return (
    <div className={`gallery ${property1} ${className}`}>
      <div className="latest-work">Latest work</div>
      {property1 === "gallery-1280-1" && (
        <>
          <GalleryCard className="gallery-card-1280-1" rectangle="/img/rectangle-1181-12.png" />
          <GalleryCard className="component" rectangle="/img/rectangle-1181-11.png" />
          <GalleryCard className="gallery-card-instance" rectangle="/img/rectangle-1181-10.png" />
          <GalleryCard className="gallery-card-1280-1-instance" rectangle="/img/rectangle-1181-9.png" />
          <GalleryCard className="instance-node" rectangle="/img/rectangle-1181-8.png" />
          <GalleryCard className="component-2" rectangle="/img/rectangle-1181-7.png" />
        </>
      )}

      {property1 === "gallery-1280-2" && (
        <>
          <div className="gallery-card-2">
            <img className="rectangle-2" alt="Rectangle" src="/img/rectangle-24-5.png" />
            <div className="project-title-i">Project title</div>
            <div className="UI-art-drection-i">UI, Art drection</div>
          </div>
          <div className="gallery-card-3">
            <img className="rectangle-2" alt="Rectangle" src="/img/rectangle-24-4.png" />
            <div className="project-title-i">Project title</div>
            <div className="UI-art-drection-i">UI, Art drection</div>
          </div>
          <div className="gallery-card-4">
            <img className="rectangle-2" alt="Rectangle" src="/img/rectangle-24-3.png" />
            <div className="project-title-i">Project title</div>
            <div className="UI-art-drection-i">UI, Art drection</div>
          </div>
          <div className="gallery-card-5">
            <img className="rectangle-2" alt="Rectangle" src="/img/rectangle-24-2.png" />
            <div className="project-title-i">Project title</div>
            <div className="UI-art-drection-i">UI, Art drection</div>
          </div>
        </>
      )}
    </div>
  );
};

Gallery.propTypes = {
  property1: PropTypes.oneOf(["gallery-1280-2", "gallery-1280-1"]),
};
