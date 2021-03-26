import React from "react";

export default function Banner({ img }) {
  return (
    <div className="banner">
      <img className="banner_img" src={img} alt="banner"></img>
    </div>
  );
}
