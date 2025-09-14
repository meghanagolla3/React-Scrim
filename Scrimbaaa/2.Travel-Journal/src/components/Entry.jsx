import React from "react";

function Entry(props) {
  return (
    <>
      <div className="container1">
        <div>
          <img src={props.img.src} alt={props.img.alt} className="img2" />
        </div>

        <div className="content">
          <h5>{props.country}</h5>
          <a href={props.googleMapsLink}>View on Google Maps</a>
          <h1>{props.title}</h1>
          <p>{props.dates}</p>
          <p>{props.text}</p>
        </div>
      </div>
    </>
  );
}

export default Entry;
