import React from "react";
import axios from 'axios';
import "../css/styles.css";
class mailtrap extends React.Component {

  handleSubmit(event) {
    event.preventDefault();

     console.log(this.props.data)

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
        // <section className="page-section ct-primary" id="contact">
            <div className="container">

                <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">

                <div className="form-group">

                  <span className="col-6 col-sm-4">
                    <label htmlFor="name">Name</label>
                  </span>
                  <span className="col-3">
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      value={this.props.data.name}
                      onChange={this.props.onNameChange}/>
                  </span>
                {/* </div> */}

                {/* <div className="form-group"> */}
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      aria-describedby="emailHelp"
                      value={this.props.data.email}
                      onChange={this.props.onEmailChange}/>
                      {/* onChange={this.props.onEmailChange.bind(this)}/> */}
                {/* </div> */}

                {/* <div className="form-group"> */}
                    <label htmlFor="message">Message</label>
                    <textarea
                      className="form-control"
                      rows="5"
                      id="message"
                      value={this.props.data.message}
                      onChange={this.props.onMessageChange}/>
                      {/* onChange={this.onMessageChange.bind(this)}/> */}
                </div>

                <button
                  type="submit"
                  className="btn btn-primary">Submit</button>

                </form>
            </div>
            // </section>
        );
    }
}
export default mailtrap;