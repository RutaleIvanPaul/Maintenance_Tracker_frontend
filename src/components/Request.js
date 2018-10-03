import React from "react";

const Request = props => {
    const {title,description,status, id, clicked} = props;
  return (
    <div className="entry">
      <h2>
        <a>Request Title:{title}</a>
      </h2>
      <p>
        {description}
      </p>
      <p className="meta">
        <span className="date">May 22,2018</span> Posted by Rutale | Status:
        {status}, Administrator Comment | <a href="#" name={`${id}`} onClick={clicked}>EDIT</a>
      </p>
    </div>
  );
};

export default Request;
