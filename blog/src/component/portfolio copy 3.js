import React from "react";
// import $ from 'jquery';
 import Sub from "./subPortfolio";
// import ImageResponsive from 'react-image-responsive';
// import {ResponsiveEmbed, Image} from 'react-bootstrap';


import "../css/styles.css";
// import { ParallaxHover } from 'react-parallax-hover';
// import ReactImageMagnify from 'react-image-magnify';
// import ReactFancyBox from 'react-fancybox'
// import 'react-fancybox/lib/fancybox.css'
// import "bootstrap/js/src/collapse.js";
// import "../../node_modules/jquery/dist/jquery.min.js";
// mport "../../node_modules/bootstrap/dist/js/bootstrap.min.js";

import laravel from "../imgs/laravelblog.png";
import react from "../imgs/reactblog.png";
import TextBlog1 from "../imgs/blog.png";
// import img3_1 from "../imgs/blog.gif";
import JobFair_Project from "../imgs/jobfair.png";
import TextBlog from "../imgs/myblog.png";
// import { MagnificPopup } from 'react-magnific-popup'
// const sources = [
  // { maxWidth: 100, src: 'http://placehold.it/100x100' },
  // { maxWidth: 200, src: 'http://placehold.it/200x100' },
  // { maxWidth: 400, src: 'http://placehold.it/400x100' },
  // { maxWidth: 800, src: 'http://placehold.it/800x100' },
  // { maxWidth: 1200, src: 'http://placehold.it/1200x100' }
// ];

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
    <section className="page-section pf-primary" id="portfolio" >
      <div>
        <div className="container-fluid p-0">
          <div>
            <h2 className="text-primary mt-0">
              What I did
            </h2>
            <hr className="divider light my-4" />
          </div>
          <br/>

        <div className="justify-content-center">
          <div className="img_container">

          {/* <div style={{width: 350, height: 'auto'}}>
                <ResponsiveEmbed >
                    {/* <embed type="image" src = {TextBlog1}/> */}
                    {/* <Image src={TextBlog1} responsive/> */}
                {/* </ResponsiveEmbed> */}
            {/* </div> */} 
            <img className="port-image" src={TextBlog1} width={350} height={250} />
            <div className="middle">
              <div className="text_alt">
                <p>React</p>
                Text Blog
              </div>
            </div>
          </div>

          <div className="img_container">
            <img className="port-image" src={JobFair_Project} width={350} height={250}/>
            <div className="middle">
              <div className="text_alt">
                <p> PHP </p>
                Job Fair Project
              </div>
            </div>
          </div>

          <div className="img_container">
            <img className="port-image" src={laravel} width={350} height={250}/>
            <div className="middle">
              <div className="text_alt">
                <p> Laravel </p>
                <p> FullStack blog </p>
              </div>
            </div>
          </div>

          <div className="img_container">
            <img className="port-image" src={react} width={350} height={250}/>
            <div className="middle">
              <div className="text_alt">
                <p></p>
                <p> React </p>
              </div>
            </div>
          </div>

          <div className="img_container">
            <img className="port-image" src={TextBlog} width={350} height={250}/>
            <div className="middle">
              <div className="text_alt">
                <p>React</p>
                TextBlog
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>
  );
}
export default Portfolio;