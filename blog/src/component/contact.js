import React from "react";
import Mailtrap from './mailtrap'
// import "../css/styles.css";
import Title from "./title";
import linkedin from "../imgs/about/LinkedIn.png"
// import linkedin from "../imgs/about/linked_small.png"
import gmail from "../imgs/about/gmail.ico"
import git from "../imgs/about/git.png"

class Contact extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: ''
        };
    }
  // =======> for Mailtrap 
  resetForm() {
    this.setState({ name: '', email: '', message: '' })
  }
  onNameChange(event) {
    this.setState({name: event.target.value})
  }

  onEmailChange(event) {
    this.setState({email: event.target.value})
  }

  onMessageChange(event) {
    this.setState({message: event.target.value})
  }
  // <======= for Mailtrap 

    render() {
  return (
        <section className="page-section ct-primary" id="contact">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8 text-center">
                        {/* <h2 className="mt-0">I'm wating your contact </h2> */}
                        {/* <hr className="divider my-4" /> */}
                        <Title title="Contact Me!"/>
                        {/* <p className="text-muted mb-5"> </p> */}
                    </div>
                </div>
                {/* <div className="row"> */}

                <div className="row justify-content-center">
                    {/* <p className="text-white-50 mb-4"> */}
                        <div id="container">
                            <ul>
                                <li>
                                    <a href="https://www.linkedin.com/in/injun-hwang-21a69913b/"> <img src={linkedin} width="50" alt="test" /> </a>
                                </li>
                                <li>
                                    {/* <!-- Make sure to change the email address in BOTH the anchor text and the link target below!--> */}
                                    <a className="d-block" href="mailto:hwangij@gmail.com"> <img src={gmail} width="50" alt="test" /> </a>
                                </li>
                                <li>
                                    <a href="https://github.com/Git-ijhwang?tab=repositories"> <img src={git} width="50" alt="test" /> </a>
                                </li>
                            </ul>

                        </div>
                    {/* </p> */}
                </div>


{/* <!--

                    <div clasclassName="col-lg-4 ml-auto text-center mb-5 mb-lg-0">
                        <i className="fas fa-phone fa-3x mb-3 text-muted"></i>
                        <a href="https://www.linkedin.com/in/injun-hwang-21a69913b/"> My Linkedin</a>
                    </div>
                    <div className="col-lg-4 mr-auto text-center">
                        <i className="fas fa-envelope fa-3x mb-3 text-muted"></i>
                        <a className="d-block" href="mailto:hwangij@gmail.com">hwangij@gmail.com</a>
                    </div>
!--> */}
        <Mailtrap
                data={this.state}
                resetForm = {this.resetForm.bind(this)}
                onNameChange = {this.onNameChange.bind(this)}
                onEmailChange = {this.onEmailChange.bind(this)}
                onMessageChange = {this.onMessageChange.bind(this)}
        />
            </div>
        </section>
  );
}
}

export default Contact;