import React from "react";
import "./user.css";

function users(props) {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={props.imgSrc} alt="userimg"></img>
          <h2 className="title">
            {" "}
            {"<"}
            {props.title}
            {"/>"}
          </h2>
        </div>
        <div className="flip-card-back">
          <h2>
            {props.fname} {props.lname}
          </h2>
          <h4>Email: {props.email} </h4>
          <h4>Phone: {props.cellNo}</h4>
        </div>
      </div>
    </div>
  );
}

export default users;
