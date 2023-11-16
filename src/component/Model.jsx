import React from "react";
import "./model.css";

function Model({ movie, status, toggleModal }) {
  return (
    <div className={`movieModal ${status ? "active" : undefined}`}>
      <a href="/" className="modalClose" onClick={toggleModal}>
        <ion-icon name="close-outline"></ion-icon>
      </a>
      <iframe
        width="1200"
        height="720"
        src={movie.video}
        title={`${movie.title} | official Trailer}`}
        frameBorder="0"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default Model;
