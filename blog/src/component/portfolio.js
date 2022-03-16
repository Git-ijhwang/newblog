import React from "react";
import Sub from "./subPortfolio";
import Title from "./title";
import SmartSlider from "react-smart-slider";
import SlideShow from 'react-image-show';
import img_laravel from "../imgs/laravelblog.png";
import img_react from "../imgs/reactblog.png";
import img_TextBlog1 from "../imgs/blog.png";
import img_JobFair_Project from "../imgs/jobfair.png";
import img_TextBlog from "../imgs/myblog.png";
import img_Django from "../imgs/Django.jpg";
import img_Golang from "../imgs/golang.jpg";
import img_Wordpress from "../imgs/wordpress.jpg";

import "../css/styles.css";
const slideImages = [
        img_laravel,
        img_react,
        img_TextBlog,
        img_JobFair_Project,
        img_Django,
        img_Golang,
        img_Wordpress
];

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
class Portfolio extends React.PureComponent {

  render() {
    const windowSize = this.props.windowWidth;
    const slidesArray = [
      {
        url:img_laravel,
        childrenElem: <DummyCaption caption="Caption 1"/>
      },
      {
        url:img_react,
        childrenElem: <DummyCaption caption="Caption 2"/>
      },
      {
        url:img_TextBlog1,
        childrenElem: <DummyCaption caption="Caption 2"/>
      },
      {
        url:img_JobFair_Project,
        childrenElem: <DummyCaption caption="Caption 2"/>
      },
      {
        url:img_TextBlog,
        childrenElem: <DummyCaption caption="Caption 2"/>
      },
      {
        url:img_Django,
        childrenElem: <DummyCaption caption="Caption 2"/>
      },
      {
        url:img_Golang,
        childrenElem: <DummyCaption caption="Caption 2"/>
      },
    ];
  return (


    <section className="page-section pf-primary" id="portfolio" >
      <div className="container-fluid p-0">
        <div className="col-12 text-center">

          <Title title="Portfolio"/>
          {/* <SmartSlider slides={slidesArray} buttonShape="round"/> */}
          <SlideShow
        images={slideImages}
        width="920px"
        imagesWidth="800px"
        imagesHeight="450px"
        imagesHeightMobile="56vw"
        thumbnailsWidth="920px"
        thumbnailsHeight="12vw"
        infinite indicators thumbnails fixedImagesHeight
      />

        </div>
      </div>
    </section>

  );
}
}
export default Portfolio;