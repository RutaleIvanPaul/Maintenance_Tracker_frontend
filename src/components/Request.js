import React from "react";

const Request = props => {
    const {title,description,status} = props;
  return (
    <div class="entry">
      <h2>
        <a>Request Title:{title}</a>
      </h2>
      <p>
        {description}
      </p>
      <p class="meta">
        <span class="date">May 22,2018</span> Posted by Rutale | Status:
        {status}, Administrator Comment | No comments
      </p>
    </div>
  );
};

export default Request;
