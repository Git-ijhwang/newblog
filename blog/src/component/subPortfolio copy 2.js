import React from "react";
// import "../css/styles.css";
// import { ParallaxHover } from 'react-parallax-hover';
import { ResponsiveImage, ResponsiveImageSize } from 'react-responsive-image';

function SubPortfolio({ name, category, src, src2 }) {
  return (
          <div className="img_container">
            <ResponsiveImage>

              <ResponsiveImageSize
              default
              minWidth={500}
              path={src}/>

              <ResponsiveImageSize
              //  default
              minWidth={1200}
              path={src2}
              />

            </ResponsiveImage>
            {/* <img className="port-image" src={src} width={650} height={350} /> */}



            <div className="middle">
              <div className="text_alt">
                <p>{name}</p>
                {category}
              </div>
            </div>
          </div>
  );
}

export default SubPortfolio;
