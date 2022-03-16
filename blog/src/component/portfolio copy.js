import React from "react";
import $ from 'jquery';
import Sub from "./subPortfolio";
import "../css/styles.css";
import { ParallaxHover } from 'react-parallax-hover';
import { Slide } from 'react-slideshow-image';

import 'react-slideshow-image/dis/style.css'
// import ReactImageMagnify from 'react-image-magnify';
// import ReactFancyBox from 'react-fancybox'
// import 'react-fancybox/lib/fancybox.css'
// import "bootstrap/js/src/collapse.js";
// import "../../node_modules/jquery/dist/jquery.min.js";
// mport "../../node_modules/bootstrap/dist/js/bootstrap.min.js";


import img1 from "../imgs/laravelblog.png";
import img2 from "../imgs/reactblog.png";
import img3 from "../imgs/blog.png";
import img3_1 from "../imgs/blog.gif";
import img4 from "../imgs/jobfair.png";
import img5 from "../imgs/myblog.png";
// import { MagnificPopup } from 'react-magnific-popup'
// 

// $('.parent-container').magnificPopup({
//   delegate: 'a', // child items selector, by clicking on it popup will open
//   type: 'image'
//   // other options
// })

// "./assets/img/laravel.png";
// function Portfolio() {
//   return (
//     <div id="portfolio">
//       <div class="container-fluid p-0">
//         <div class="row no-gutters parent-container">

        {/* <ReactFancyBox */}
          {/* thumbnail="https://loremflickr.com/320/240" */}
          {/* image="https://www.w3schools.com/howto/img_forest.jpg"/> */}


//           <Sub name="My Blog"               category="React"    src={img3} src2={img3_1} />
//           <Sub name="NSCC Job Fair Project" category="Laravel"  src={img4} />
//           <Sub name="Laravel"               category="Laravel"  src={img1} />
//           <Sub name="React"                 category="React"    src={img2} />
//           <Sub name="TextBlog"              category="React"    src={img5} />
//         </div>
//       </div>
//     </div>
//   );
// }

// $('.parent-container').magnificPopup({
//   delegate: 'a', // child items selector, by clicking on it popup will open
//   type: 'image'
//   // other options
// })

// "./assets/img/laravel.png";
function Portfolio() {
  return (
    <div id="portfolio">
      <div class="container-fluid p-0">
        {/* <div class="row h-100 align-items-center justify-content-center text-center"> */}
        <div class="row justify-content-center">
        {/* <div class="row no-gutters parent-container"> */}
          {/* <Sub name="My Blog" category="React" src={img3} src2={img3_1} /> */}
          {/* <Sub name="NSCC Job Fair Project" category="Laravel" src={img4} /> */}
          {/* <Sub name="Laravel" category="Laravel" src={img1} /> */}
          {/* <Sub name="React" category="React" src={img2} /> */}
          <ParallaxHover light={0} scale={5} shadow={5} width={200} height={100}>
          {/* <Sub name="My Blog" category="React" src={img3} src2={img3_1} /> */}
          <img src={img3} width={300} height={150}/>
          </ParallaxHover>

          <ParallaxHover light={0} scale={5} width={300} height={150}>
          {/* <Sub name="NSCC Job Fair Project" category="Laravel" src={img4} /> */}
          <img src={img4} width={300} height={150}/>
          </ParallaxHover>

          <ParallaxHover light={0} scale={5} width={300} height={150}>
          <img src={img1} width={300} height={150}/>
          </ParallaxHover>

          <ParallaxHover light={0} scale={5} width={300} height={150}>
          {/* <Sub name="React" category="React" src={img2} /> */}
          <img src={img2} width={300} height={150}/>
          </ParallaxHover>

          <ParallaxHover light={0} scale={5} width={300} height={150}>
          <img src={img5} width={300} height={150}/>
          {/* <Sub name="React" category="React" src={img5} /> */}
          </ParallaxHover>

        {/* </div> */}
      </div>
    </div>
    </div>
  );
}
export default Portfolio;