import React from "react";
import "./SixthItem.css";

export default function SixthItem(props) {
  return (
    <div className="SixthItem-container">
      <img src={`https://images.assettype.com/${props.imgKey}`} alt="error" />
      <div className="SixthItem-content">
        <span className="SixthItem-headline">{props.headline}</span>
        <span className="SixthItem-authorName">By {props.authorName}</span>
      </div>
    </div>
  );
}
