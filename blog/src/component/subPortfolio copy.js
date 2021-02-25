import React from "react";
// import "../css/styles.css";
// import { ParallaxHover } from 'react-parallax-hover';

function SubPortfolio({ name, category, src, src2 }) {
  return (
    <div className="col-lg-4 col-sm-6">
      {/* <a className="portfolio-box" href={src2}> */}
      <a className="test-popup-link" href={src2} >

        <img className="img-fluid" src={src} alt="" />

        <div className="portfolio-box-caption">
          <div className="project-category text-white-50">{category}</div>
          <div className="project-name">{name}</div>
        </div>

      </a>
    </div>
  );
}

export default SubPortfolio;
