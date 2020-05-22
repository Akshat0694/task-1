import React from "react";
import Layout from "../../../molecule/Layout";
import "./FourthItem.css";

export default function FourthItem(props) {
  return (
    <div className="FourthItem-container">
      <img
        className="FourthItem-image"
        src={`https://images.assettype.com/${props.imgKey}`}
        alt="error"
      />
      <div className="FourthItem-content">
        <span>{props.headline}</span>
        <span>
          By <strong>{props.authorName}</strong>
        </span>
      </div>
    </div>
  );
}
