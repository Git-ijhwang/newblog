import React from "react";
import SmartSlider from "react-smart-slider";




import img_laravel from "../imgs/laravelblog.png";
import img_react from "../imgs/reactblog.png";
import img_TextBlog1 from "../imgs/blog.png";
import img_JobFair_Project from "../imgs/jobfair.png";
import img_TextBlog from "../imgs/myblog.png";
import img_Django from "../imgs/Django.jpg";
import img_Golang from "../imgs/golang.jpg";
import img_Wordpress from "../imgs/wordpress.jpg";

import "../css/styles.css";
// import 'react-slideshow-image/dis/style.css'
// DummyCaption component for example
const DummyCaption = ({ caption }) => (
  <div style={{
    position: 'absolute',
    right: 100,
    top: 250,
    fontSize: 38,
    padding: 55,
    border: 'solid 1px',
  }}>
    {caption}
  </div>
);


const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true
}

function Slideshow() {
  const slidesArray = [
    {
      url:img_laravel,
      childrenElem: <DummyCaption caption="Caption 1"/>
    },
    {
      url:img_react,
      childrenElem: <DummyCaption caption="Caption 2"/>
    },
  ];

    return (
      <div className="App">
        <h1>React Smart Slider</h1>
        <SmartSlider
          slides={slidesArray}
          buttonShape="square"
          />
      </div>
    )
}

export default Slideshow;