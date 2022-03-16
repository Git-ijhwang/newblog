import React from "react";
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

// import "../css/styles.css";
import 'bootstrap/dist/css/bootstrap.min.css';

<link
  rel="stylesheet"
  href="https://maxcdn.bootstrapcdn.com/bootstrap/4.6.0/css/bootstrap.min.css"
  integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
  crossorigin="anonymous"
/>

class mailtrap extends React.Component {

  handleSubmit(event) {
    event.preventDefault();

    axios({
      method: "POST",
      url: "http://localhost:3002/send",
      data: this.props.data
    }).then((response) => {
        // console.log(response.data);
      if (response.data.status === 'success') {
        alert("Message Sent.");
        this.props.resetForm();
      }
      else if (response.data.status === 'fail') {
        alert("Message failed to send.");
      }
    })
  }

  render() {
    return (

      <div className="container">
        <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">

          <div className="form-group">

            <div className="form-group">
              <Container>
                <Row>
                  <Col sm={2}>
                    <label htmlFor="name">Name</label>
                  </Col>
                  <Col sm={10}>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      value={this.props.data.name}
                      onChange={this.props.onNameChange}/>
                  </Col>
                </Row>
              </Container>
            </div>

            <div className="form-group">
              <Container>
                <Row>
                  <Col sm={2}>
            <label htmlFor="exampleInputEmail1">Email address</label>
                  </Col>
                  <Col sm={10}>
            <input
              type="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
              value={this.props.data.email}
              onChange={this.props.onEmailChange}/>
              {/* onChange={this.props.onEmailChange.bind(this)}/> */}
                  </Col>
                </Row>
              </Container>
              </div>

              <div className="form-group">
              <Container>
                <Row>
                  <Col sm={2}>
            <label htmlFor="message">Message</label>
                  </Col>
                  <Col sm={10}>
            <textarea
              className="form-control"
              rows="5"
              id="message"
              value={this.props.data.message}
              onChange={this.props.onMessageChange}/>
              {/* onChange={this.onMessageChange.bind(this)}/> */}
                  </Col>
                </Row>
              </Container>
          </div>
          </div>

              <Container>
                <Row>
                  <Col md={{ span: 6, offset: 3 }}>
          <Button variant="primary" size="lg" block>
            {/* // type="submit" */}
            {/* // className="btn btn-primary"> */}
              Submit
          </Button>
                  </Col>
                </Row>
              </Container>

        </form>
      </div>
    );
  }
}
export default mailtrap;