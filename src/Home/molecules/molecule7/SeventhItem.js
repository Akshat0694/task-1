import React from "react";
import "./SeventhItem.css";

export default function SeventhItem(props) {
  return (
    <div className="SeventhItem-container">
      <img src={`https://images.assettype.com/${props.imgKey}`} alt="error" />
      <div className="SeventhItem-content">
        <span className="SeventhItem-headline">{props.headline}</span>
        <span className="SeventhItem-authorName">By {props.authorName}</span>
      </div>
    </div>
  );
}
