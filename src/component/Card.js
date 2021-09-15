import React from "react";
import "./Card.css";

function Card(props) {
  return (
    <>
      <div className="cards">
        <div className="innerCard">
          <img className="movie-image" src={props.imgsrc} alt="mypic" />

          <div className="card-info">
            <div className="inner-info">
              <span>{props.title}</span>
            </div>
            <div className="inner-info">
              <h3>{props.seriesName}</h3>
            </div>
            <div className="inner-info">
              <a id="movie-link" href={props.link}>
                <button id="btn">Watch now</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
