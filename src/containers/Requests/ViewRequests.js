import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import Request from "../../components/Request";
import getRequests from "../../store/actions/viewRequestsActions";
import "../../css/style.css";

class ViewRequests extends Component {
  state = {
    editform: "no_display"
  };

  componentDidMount() {
    this.fetchUserRequests();
  }

  fetchUserRequests = () =>{
    const {Requests} = this.props;
    Requests();
  }

  eventListener = event =>
    this.setState({ [event.target.name]: event.target.value });

  getRequest = event => {
    this.setState({ current_request_id: event.target.name });
    axios({
      url: `https://kla08-maintenance-tracker.herokuapp.com/api/v1/users/requests/${
        event.target.name
      }`,
      method: "GET",
      headers: {
        "x-access-token": localStorage.getItem("token")
      }
    }).then(response => {
      this.setState({
        title: response.data.request[0].title,
        description: response.data.request[0].description,
        editform: "display"
      });
    });
  };

  editRequest = event => {
    event.preventDefault();
    const { current_request_id, title, description } = this.state;
    const data = {
      title,
      description
    };
    axios({
      url: `https://kla08-maintenance-tracker.herokuapp.com/api/v1/users/requests/${current_request_id}`,
      method: "PUT",
      headers: {
        "x-access-token": localStorage.getItem("token")
      },
      data: data
    }).then(response => {
      this.setState({ editform: "no_display" });
      this.fetchUserRequests();
    });
  };

  render() {
    const { editform, title, description } = this.state;
    const { requests } = this.props;
    return (
      <div className="main">
        <div id="content">
          <div id="left">
            <div className={editform}>
              <div className="form">
                <div>
                  <div className="tab-content">
                    <div id="signup">
                      <form onSubmit={this.editRequest}>
                        <div className="field-wrap">
                          <input
                            type="text"
                            value={title}
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
                            value={description}
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
            </div>
            {requests.length >= 1 ? (
              requests.map((data, key) => (
                <Request
                  key={key}
                  title={data.title}
                  description={data.description}
                  status={data.status}
                  id={data.id}
                  clicked={this.getRequest}
                />
              ))
            ) : (
              <button className="button button-block">No requests yet.</button>
            )}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    requests: state.view_requests.requests
  };
};

const mapDispatchToProps = dispatch => {
  return {
    Requests: () => dispatch(getRequests())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewRequests);

