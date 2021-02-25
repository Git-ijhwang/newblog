import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

// import { Collapse,Navbar,NavbarToggler,NavbarBrand,Nav,NavItem, NavLink } from 'react-bootstrap'
import { Collapse,Navbar,NavbarToggler,NavbarBrand,Nav,NavItem, NavLink } from 'reactstrap'

const links  = [
    {href:'#about', text:'About Me', className:'text-color'},
    {href:'#portfolio', text:'Portfolio', className:'text-color'},
    {href:'#contact', text:'Contact', className:'text-color'},
];

const createNavItem = ({ href, text, className }) => (
    <NavItem>
      <NavLink href={href} className={className}>{text}</NavLink>
    </NavItem>
  );

class nav extends React.Component {

    constructor(props) {
        super(props);
    
        this.state = {
          isOpen: false
        };
    
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
    }


    render() {
        // const opacity = Math.min(100 / this.state.currentScrollHeight  , 1);
        return(

          <div>
            <Navbar  className="fixed-top" color="dark" light expand="md">
              <NavbarBrand href="/"><span className="text-color">Injun Hwang</span></NavbarBrand>


              <NavbarToggler onClick={this.toggle} />
              {/* <Navbar.Toggle onClick={this.toggle}/> */}

              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    {/* <Nav.Link href="#about">About Me</Nav.Link> */}
                    {/* <Nav.Link href="#portfolio">My Portfolio</Nav.Link> */}
                    {/* <Nav.Link href="#contact">Contact</Nav.Link> */}
                  {links.map(createNavItem)}
                </Nav>
              </Collapse>
            </Navbar>
          </div>
        )  
    }
}
export default nav;
