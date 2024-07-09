import React from "react";
import "../styles/Services.css";

const Services = ({ cardImage, cardTitle, cardDesc }) => {
  return (
    <div className="p-3" style={{ width: "400px" }}>
      <div className="d-flex mb-3">
        <img id="services-img" src={cardImage} className="me-3" />
        <h5>{cardTitle}</h5>
      </div>
      <p>{cardDesc}</p>
    </div>
  );
};

export default Services;
