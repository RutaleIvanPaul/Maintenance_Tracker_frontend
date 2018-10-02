import React, { Component } from "react";
import axios from "axios";
import Request from "../../components/Request";
import "../../css/style.css";

class ViewRequests extends Component {
  state = {
    requests: []
  };

  componentDidMount() {
    axios({
      url:
        "https://kla08-maintenance-tracker.herokuapp.com/api/v1/users/requests",
      method: "GET",
      headers: {
        "x-access-token": localStorage.getItem("token")
      }
    }).then(response => {
      this.setState({ requests: response.data.requests });
      console.log(response.data.requests);
    });
  }

  render() {
    const { requests } = this.state;
    return (
      <div class="main">
        <div id="content">
          <div id="left">
            {requests.map((data, key) => (
              <Request
                key={key}
                title={data.title}
                description={data.description}
                status={data.status}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default ViewRequests;
