import React from "react";

function Entry(props) {
  return (
    <>
      <div className="container1">
        <div>
          <img src={props.entry.img.src} alt={props.entry.img.alt} className="img2" />
        </div>

        <div className="content">
          <h5>{props.entry.country}</h5>
          <a href={props.entry.googleMapsLink}>View on Google Maps</a>
          <h1>{props.entry.title}</h1>
          <p>{props.entry.dates}</p>
          <p>{props.entry.text}</p>
        </div>
      </div>
    </>
  );
}

export default Entry;
