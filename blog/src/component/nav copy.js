import React from "react";
 import "../../node_modules/jquery/dist/jquery.min.js";
// import "../../node_modules/bootstrap/dist/js/bootstrap.min.js";
// import "./bootstrap/js/src/collapse.js";

import "../css/styles.css";

import $ from 'jquery';
const isExpanded=true;

// const  nav = () => {
class nav extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            opacity: 0,
            currentScrollHeight :0,
        }
    }

    // $(window).scroll(function() {
    //     if ($(window).scrollTop() > 75) {
    //         $('#navBar').css("opacity", 0.3);
    //     }
    //     else {
    //         $('#navBar').css("opacity", 1);
    //     }
    // });
    
    // $(document).ready(function(){
    //     $('#navBar').live("mouseover", function () {
    //             $(this).css("opacity", 1);
    //             });
    
    //     $('#navBar').live("mouseleave", function () {
    //         if($(window).scrollTop() > 75) { // this here
    //             $(this).css("opacity", 0.3);
    //         }
    //     });
    
    // })

    componentDidMount () {      
        window.onscroll =()=>{
         const newScrollHeight = Math.ceil(window.scrollY / 50) *50;
         if (this.state.currentScrollHeight != newScrollHeight){
             this.setState({currentScrollHeight: newScrollHeight});
         }
       }
     }

     shouldComponentUpdate(nextProps, nextState) {
         console.log('shouldcomponentUpdate', nextProps, nextState);
     }

//   const setExpanded = isExpanded = (isExpanded)?(false):(true);

  render () {
  const setExpanded = ({isExpanded}) => {
        isExpanded = !isExpanded;
        console.log(isExpanded);
    console.log(this.props.collapseOnSelect);
  };

    const opacity = Math.min(100 / this.state.currentScrollHeight  , 1)

  return (
    //  <div style={{opacity}} id='element-you-want-to-fade'>
     <div style={{opacity}} id='navBar'>
        <nav className="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav">

            <div className="container">
                <a className="navbar-brand js-scroll-trigger" href="#page-top">Injun Hwang</a>
                <button
                    className="navbar-toggler navbar-toggler-right"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarResponsive"
                    aria-controls="navbarResponsive"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    onClick={() => setExpanded(isExpanded)}
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div
                    //  className= {isExpanded? ("collapse navbar-collapse"):("")}
                    className= {isExpanded? ("collapse navbar-collapse"):("collapse navbar-collapse-none")}
                    // className="collapse navbar-collapse"
                    // className="navbar-collapse-none"
                    id="navbarResponsive"
                    onClick={() => setExpanded(isExpanded)}
                >
                    
                    <ul className="navbar-nav ml-auto my-2 my-lg-0">
                        <li className="nav-item active"> <a className="nav-link js-scroll-trigger" href="#about">About</a> </li>
                        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#portfolio">Portfolio</a></li>
                        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#contact">Contact</a></li>
                    </ul>
                </div>

            </div>
        </nav>
            </div>
  );
  }
}
export default nav;
