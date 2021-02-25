import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams,
  } from "react-router-dom";
import { Navbar,Nav,NavDropdown,Form,FormControl,Button } from 'react-bootstrap'


// import "../css/styles.css";
// const  nav = () => {
class nav extends React.Component {
    // componentDidMount () {      
    //     window.onscroll =()=>{
    //      const newScrollHeight = Math.ceil(window.scrollY / 50) *50;
    //      if (this.state.currentScrollHeight != newScrollHeight){
    //          this.setState({currentScrollHeight: newScrollHeight})
    //      }
    //    }
    //  }
    render() {
        // const opacity = Math.min(100 / this.state.currentScrollHeight  , 1);
        return(
            // <div style={{opacity}} >
            <div>
                {/* <div className="row"> */}
      <div className="container-fluid p-0">
                    {/* <div className="col-md-12  navbar-expand-lg navbar-light container"> */}
                        {/* <Router> */}
                            <Navbar width="auto" bg="dark" variant="dark" expand="lg" sticky="top">

                                <Navbar.Brand href="#page-top">Injun Hwang</Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="ml-auto" navbar>
                                    {/* <Nav className="col-md-12"> */}
                                        {/* <Nav.Link href="/">Home</Nav.Link> */}
                                        <Nav.Link href="#about">About Me</Nav.Link>
                                        <Nav.Link href="#portfolio">My Portfolio</Nav.Link>
                                        <Nav.Link href="#contact">Contact</Nav.Link>
                                    </Nav>
                                    {/* <Form inline> */}
                                    {/* <FormControl type="text" placeholder="Search" className="mr-sm-2" /> */}
                                    {/* <Button variant="outline-success">Search</Button> */}
                                    {/* </Form> */}
                                </Navbar.Collapse>
                            </Navbar>
                            <br />
                            {/* <Switch>
                                <Route exact path="/">
                                    <Home />
                                </Route>
                                <Route path="/about-us">
                                    <AboutUs />
                                </Route>
                                <Route path="/contact-us">
                                    <ContactUs />
                                </Route>
                            </Switch> */}
                        {/* </Router> */}
                    {/* </div> */}
                </div>
            </div>
        )  
    }
}
export default nav;
