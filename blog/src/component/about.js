import React from 'react'
import Title from "./title";

import "../css/styles.css";
import laravel from "../imgs/about/laravel.png"
import react from "../imgs/about/REACT.png"
import go from "../imgs/about/Go.png"
import php from "../imgs/about/php.png"
import python from "../imgs/about/python.png"
import angular from "../imgs/about/angular.svg"
import c from "../imgs/about/c.webp"
import redis from "../imgs/about/redis2.webp"
import mongo from "../imgs/about/mongo.webp"
import wordpress from "../imgs/about/174881.png"


function about() {

function changeBigImg(e) {
  e.target.width=e.target.width*2
} 
function changeSmlImg(e) {
  e.target.width=e.target.width/2
} 
  return (
    <section className="page-section bg-primary" id="about">
      <div className="container-fluid p-0">
      {/* <div className="container"> */}
        <div className="justify-content-center" >
          <div className="col-lg-8 text-center align-center">

      {/* <h2 className="text-white mt-0">
        What I can do
      </h2>
      <hr className="divider light my-4" /> */}
            <Title title="What I can do"/>

            <h4 className="text-white mt-0">
              Programming Skills
            </h4>

            <div className="text-white-50 mb-4">
              <div id="container">
                <ul>
                  <li> <img src={c} width="50" alt="C" /> </li>
                  <li> <img src={react} width="50" alt="React" /> </li>
                  <li> <img src={python} width="50" alt="Python" /> </li>
                  <li> <img src={php} width="50" alt="PHP" /> </li>
                  <li> <img src={go} width="50" alt="Go" /> </li> 
                  <li> <img src={angular} width="50" alt="Angular" /> </li>
                  <li> <img src={wordpress} width="50" alt="Wordpress" /> </li>
                  <li> <img src={laravel} width="50" alt="Laravel" /> </li>
                  <li> <img src={mongo} width="50" alt="MongoDB" /> </li>
                  <li> <img src={redis} width="50" alt="Redis" /> </li>
                </ul>
              </div>
            </div>


            <h4 className="text-white mt-0">
              Other Skills
            </h4>

            <p className="text-white-50 mb-4">
              TCP/IP Socket Network Programming<br/>
              Protocol Analyze<br/>
              Cellular Network (LTE/5G) Development Experience<br/>
            </p>
            {/* <a class="btn btn-light btn-xl js-scroll-trigger" href="#services">
              Get Started!
            </a> */}
            <h4 className="text-white mt-0">
              My Strength
            </h4>

            <p className="text-white-50 mb-4">
              Work experience as a network programmer base on the Linux environment.<br/>
              Committed, hard-working with self-motivated work ethic with the ability to work independently.<br/>
              Enthusiastic team player who is always willing to contribute.<br/>
              Strong problem-solver.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default about;
