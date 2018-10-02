import React from "react";

const AdminRequest = props => {
  const { title, description, status, id, clicked } = props;
  return (
    <div className="entry">
      <h2>
        <a>
          Request Title:
          {title}
        </a>
      </h2>
      <p>{description}</p>
      {status === 'pending' ? (
               <ul className="tab-group">
               <li className="tab">
                 <a name={`${id}${"/approve"}`} onClick={clicked}>
                   Approve
                 </a>
               </li>
               <li className="tab">
                 <a name={`${id}${"/disapprove"}`} onClick={clicked}>
                   Reject
                 </a>
               </li>
             </ul>
      ) : null}
      <p className="meta">
        <span className="date">May 22,2018</span> Posted by Rutale | Status:{" "}
        {status}, Administrator Comment | No comments
      </p>
    </div>
  );
};

export default AdminRequest;
