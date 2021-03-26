import React from "react";
import "../css/card.css";

export default function Card({
  img,
  date,
  tittle,
  summary,
  tag,
  linkTag,
  leftContent,
}) {
  return (
    <div className={leftContent === true ? "card left" : "card"}>
      <div className="card_img">
        <img src={img} alt="-"></img>
      </div>
      <div className="card_content">
        <div className="card_date">
          <a className="tag" href={linkTag}>
            {tag}
          </a>
          <span className="date">{date}</span>
        </div>
        <div className="card_tittle">{tittle}</div>
        <div className="card_summary">{summary}</div>
        <div className="card_readmore"></div>
      </div>
    </div>
  );
}
