import React, {useState} from "react";
import Nav from './component/nav'
import Header from './component/header'
import About from './component/about'
import Portfolio from './component/portfolio'
import Contact from './component/contact'
import Footer from './component/footer'
// import $ from 'jquery';
// import  "magnific-popup";
import './css/styles.css'
// import './js/scripts'
// import $ from "jquery";
// window.$ = window.jQuery = $;

// $(document).ready(function() {
    // $('.play-btn').magnificPopup({ type: 'image' });

// });

class App extends React.Component {
  // function App() {

  constructor (props) {
    super(props);
    this.state = {
      windowWidth: window.innerWidth,
      // name: '',
      // email: '',
      // message: ''
    };
  }

  handleResize = (e) => {
    this.setState({ windowWidth: window.innerWidth });
  };
  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
  }
  
  componentWillUnmount() {
    window.addEventListener("resize", this.handleResize);
  } 

  render () {
  const handleResize = (e) => {
    this.setState({ windowWidth: window.innerWidth });
  };
  
    const { windowWidth } = this.state; 
    // console.log("Current Window Size is ",{windowWidth});

    return (
      <div className="App">
        {/* <container> */}

        {/* <Nav collapsOnSelect/> */}
        <Nav/>
        {/* </container> */}
        <Header/>
        <About/>
        <Portfolio windowWidth={windowWidth}/>
        <Contact/>
        <Footer/>
      </div>
    );
  };
}

export default App;
