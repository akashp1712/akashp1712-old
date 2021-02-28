import React from "react";
import "./BookCard.css";

export default function BookCard({cardInfo, isDark}) {
  function openUrlInNewTab(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }

  return (
    <div className={isDark ? "dark-mode book-card" : "book-card"}>
      <div className="book-image-div">
        <img src={cardInfo.image} alt="PWA" className="card-image"></img>
      </div>
      <div className="book-detail-div">
        <h5
          className={isDark ? "dark-mode book-card-title" : "book-card-title"}
        >
          {cardInfo.title}
        </h5>
        <p
          className={
            isDark ? "dark-mode book-card-subtitle" : "book-card-subtitle"
          }
        >
          {cardInfo.description}
        </p>
      </div>
    </div>
  );
}
