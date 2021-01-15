import "./App.css";
import "./Card.css";
import React from "react";

export default function Card({ name, username, email }) {
  return (
    <div className="card-container">
      <div className="card">
        <p className="card-text">
          {name}
          <br></br>
          {username}
          <br></br>
          {email}
        </p>
      </div>
    </div>
  );
}
