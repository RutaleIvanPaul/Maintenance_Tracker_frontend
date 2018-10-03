import React, { Component } from "react";
import axios from "axios";
import AdminRequest from "../../components/AdminRequest";
import "../../css/style.css";

class AdminViewRequests extends Component {
  state = {
    requests: []
  };

  componentDidMount() {
    this.fetchRequests();
  }

  changeStatus = event => {
    axios({
      url: `https://kla08-maintenance-tracker.herokuapp.com/api/v1/requests/${
        event.target.name
      }`,
      method: "PUT",
      headers: {
        "x-access-token": localStorage.getItem("token")
      }
    }).then(() => {
        this.fetchRequests();
    });
  };

  fetchRequests = () => {
    axios({
      url: "https://kla08-maintenance-tracker.herokuapp.com/api/v1/requests/",
      method: "GET",
      headers: {
        "x-access-token": localStorage.getItem("token")
      }
    }).then(response => {
      this.setState({ requests: response.data.request });
      console.log(response.data.request);
    });
  };

  render() {
    const { requests } = this.state;
    return (
      <div className="main">
        <div id="content">
          <div id="left">
            {requests.map((data, key) => (
              <AdminRequest
                key={key}
                title={data.title}
                description={data.description}
                status={data.status}
                id={data.id}
                clicked={this.changeStatus}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default AdminViewRequests;
