import React from "react";
// import "../css/styles.css";
// import { ParallaxHover } from 'react-parallax-hover';
// import { ResponsiveImage, ResponsiveImageSize } from 'react-responsive-image';
// import { Dimensions } from 'react-native';

import useDimensions from "react-use-dimensions";


class SubPortfolio extends React.Component {//({ name, category, src, src2 }) {


  render() {
    // let dimensions = Dimensions.get("window");
    // let imageHeight = Math.round((dimensions.width * 9) / 16);
    let imageWidth  = Math.round((this.props.size * 9) / 19);
    // let imageWidth = dimensions.width;
  return (
          <div className="img_container">

            <img className="port-image" src={this.props.src} width={imageWidth} height="auto" />




            <div className="middle">
              <div className="text_alt">
                <p>{this.props.name}</p>
                <p>{this.props.category}</p>
                <p className="text_desc">{this.props.description}</p>
                {this.props.url?<a href={this.props.url}>Go to My Git Repository</a>:""}
              </div>
            </div>
          </div>
  );
  }
}

export default SubPortfolio;
