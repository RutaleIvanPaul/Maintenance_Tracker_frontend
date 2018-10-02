import React, { Component } from "react";
import axios from "axios";
import "../../css/style.css";

class CreateRequest extends Component {
  state = {};

  submitRequest = (e) => {
	e.preventDefault();
	const {title,description} =this.state;
    const data = {
	  title,
	  description
    };
    axios({
		url: "https://kla08-maintenance-tracker.herokuapp.com/api/v1/users/requests",
		method: 'POST',
		headers: {
          'Content-Type': 'application/json',
          'x-access-token':localStorage.getItem('token')
		},
		data: data
	  })
	  .then((response) => {
        console.log(response);
      });
  };

  eventListener = event => this.setState({ [event.target.name]: event.target.value });

  render() {
    return (
      <div className="form3 animated fadeIn">
        <div>
          <div className="tab-content">
            <div id="signup">
              <h1>Input Request Here</h1>
              <form onSubmit={this.submitRequest}>
                <div className="field-wrap">
                  <input
                    type="text"
                    placeholder="Request Title"
                    required
                    name="title"
                    onChange={this.eventListener}
                  />
                </div>

                <div className="field-wrap">
                <textarea 
                name="description"
                cols="30" 
                rows="5" 
                placeholder="Request Description"
                onChange={this.eventListener}
                />
                </div>

                <input type="submit" className="button button-block" />
              </form>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default CreateRequest;
