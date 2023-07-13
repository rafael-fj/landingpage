import logo from './logo.svg';
import './App.css';
import React from "react";

function App() {
  return (
    <X1280px
      topBar1280Props={x1280pxData.topBar1280Props}
      header1280Props={x1280pxData.header1280Props}
      clients1280Props={x1280pxData.clients1280Props}
      Skills1280Props={x1280pxData.skills1280Props}
      galery1280Props={x1280pxData.galery1280Props}
      clients1280Props={x1280pxData.clients1280Props}
      footer1280Props={x1280pxData.gooter1280Props}
      />
  );
}

export default App;

function X1280px(props) {
  const { topBar1280Props, header1280Props, clients1280Props, skills1280Props, gallery1280Props, clients12802Props, footer1280Props } = props;

  return (
    <div className="x1280px screen">
      <TopBar1280
        logo={topBar1280Props.logo}
        about={topBar1280Props.about}
        work={topBar1280Props.work}
        place={topBar1280Props.place}
    />
    <Header1280
      brandingImageMaking={header1280Props.brandingImageMaking}
      title={header1280Props.title}
      thisIsATemplateF={header1280Props.thisIsATemplateF}
      group5356={header1280Props.group5356}
    />
    <Clients1280 src={clients1280Props.src} />
    <Skills1280 cardsProps={skills1280Props.cardsProps} />
    <Galery1280
      latestWork={galery1280Props.latestWork}
      galleryCard128011Props={gallery1280Props.galleryCard128011Props}
      galleryCard128012Props={gallery1280Props.galleryCard128012Props}
      galleryCard128013Props={gallery1280Props.galleryCard128013Props}
      galleryCard128014Props={gallery1280Props.galleryCard128014Props}
      galleryCard128015Props={gallery1280Props.galleryCard128015Props}
      galleryCard128016Props={gallery1280Props.galleryCard128016Props}
    />
    <Clients12802
      clients={clients12802Props.clients}
      clientCard12801Props={clients12802Props.clientCard12801Props}
      clientCard12802Props={clients12802Props.clientCard12802Props}
      clientCard12803Props={clients12802Props.clientCard12803Props}
    />
    <Footer1280 {...footer1280Props} />
    </div>
  );
}

function TopBar1280(props) {
  const { logo, about, work, place } = props;
  return (
    <div className="top-bar-1281">
      <div className="logo valign-text-middle subtitle"> 
      (logo)
      </div>
      <div className="about valign-text-middle body-text"> 
      (about)
      </div>
      <div className="work valign-text-middle body-text"> 
      (work)
      </div>
      <div className="place valign-text-middle body-text">
        (place)
      </div>
    </div>
  );
}
  function Header1280(props) {
    const { branding, ImageMaking, title, thisIsATemplateF, group5356 } = props;
    
    return (
    <div className="header-1281">
      <div className="group-1">
        <div className="branding-image-making valign-text-middle subtitle">
          {brandingImageMaking}
        </div>
        <h1 className="title valign-text-middle h1">
          {title}
        </h1>
        <p className="this-is-a-template-f body-text">
          {thisIsATemplateF}
        </p>
      </div>
      <img className="group-5356" src={group5356} alt="Group 5356" /> 
      </div>
    );
  }