import React from "react";
import "../css/styles.css";

function header() {
  return (
    <header className="masthead" id="page-top">
      <div className="container h-100">
        <div className="row h-100 align-items-center justify-content-center text-center">
          <div className="col-lg-10 align-self-end">
            <h1 className="text-uppercase text-white font-weight-bold">
              Injun Hwang
            </h1>
            <hr className="divider my-4" />
          </div>
          <div className="col-lg-8 align-self-baseline">
            <div className="text-white-75 font-weight-light mb-5">
            I feel happy when I develop what I want and what I imagine.<br/>
            I believe that technology makes our world better. I also hope I can improve the world through my work.<br/>
            Now I believe I can achieve my dream here in this new environment.
            </div>

            {/* <a
              className="btn btn-primary btn-xl js-scroll-trigger"
               href="#portfolio"
            >
              My Works
            </a> */}
          </div>
        </div>
      </div>
    </header>
  );
}

export default header;
