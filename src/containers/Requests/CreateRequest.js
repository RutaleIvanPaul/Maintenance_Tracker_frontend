import React, { Component } from "react";
import axios from "axios";
import "../../css/style.css";

class CreateRequest extends Component {
  state = {
    message:"Input Request Here"
  };

  submitRequest = (e) => {
	e.preventDefault();
  const {title,description} =this.state;
  const { history } = this.props;
  const { push } = history;
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
      push(`/ViewRequests`);
      }).catch((error) => {
        if (error.response){
          this.setState({
            message:"Request Could not be created."
          })
        }
      });
  };

  eventListener = event => this.setState({ [event.target.name]: event.target.value });

  render() {
    const { message } = this.state;
    return (
      <div className="form">
        <div>
          <div className="tab-content">
            <div id="signup">
              <h1>{ message }</h1>
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
                maxLength="50"
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
