import React from "react";
import { Clients } from "../../components/Clients";
import { Footer } from "../../components/Footer";
import { Gallery } from "../../components/Gallery";
import { Skills } from "../../components/Skills";
import { TopBar } from "../../components/TopBar";
import "./style.css";

export const Element = () => {
  return (
    <div className="element">
      <div className="element-px">
        <TopBar
          aboutClassName="top-bar-1280-instance"
          className="top-bar-1280"
          contactClassName="top-bar-1280-instance"
          href="https://www.animaapp.com/?utm_source=figma-samples&utm_campaign=figma-portfolio&utm_medium=figma-samples"
          href1="https://www.animaapp.com/?utm_source=figma-samples&utm_campaign=figma-portfolio&utm_medium=figma-samples"
          href2="https://www.animaapp.com/?utm_source=figma-samples&utm_campaign=figma-portfolio&utm_medium=figma-samples"
          href3="https://www.animaapp.com/?utm_source=figma-samples&utm_campaign=figma-portfolio&utm_medium=figma-samples"
          logoClassName="top-bar-instance"
          property1="default"
          workClassName="top-bar-1280-instance"
        />
        <div className="header">
          <div className="group-14">
            <div className="text-wrapper-2">Branding | Image making</div>
            <h1 className="h-1">Visual Designer</h1>
            <p className="text-wrapper-3">
              This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com
            </p>
          </div>
          <img className="group-15" alt="Group" src="/img/group-5356.png" />
        </div>
        <Clients className="clients-1280" logosLogos="/img/logos-1280.png" property1="brands-1280" />
        <Skills
          cardsCardClassName="skills-instance"
          cardsCardClassNameOverride="skills-instance"
          cardsFrameWrapperClassName="skills-instance"
          className="skills-1280"
          property1="skills-1280-1"
        />
        <Gallery className="gallery-1280" property1="gallery-1280-1" />
        <Clients className="clients-instance" property1="clients-1280-1" />
        <Footer
          className="footer-1280"
          group="/img/group-5367-1.png"
          href="https://www.animaapp.com/?utm_source=figma-samples&utm_campaign=figma-portfolio&utm_medium=figma-samples"
          href1="https://discord.com/invite/eQxkYTNxSp"
          href2="https://www.facebook.com/animaapp/"
          href3="https://dribbble.com/animaapp"
          href4="https://www.instagram.com/animaapp/?hl=en"
          href5="https://www.behance.net/Anima_design"
        />
      </div>
    </div>
  );
};
