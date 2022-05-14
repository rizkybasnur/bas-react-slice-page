import React from "react";
import style from "./Button.module.css";
import "../App.css";

function Button({ text, background, icon, color, padding }) {
  const backgroundColor = style[background];
  const textColor = style[color];
  const p = style[padding];

  return (
    <div className="mr-4">
      <button
        className={`${style.button} ${backgroundColor} ${textColor} ${p}`}
      >
        <div className="flex">
          <img src={icon} alt="" className={text && icon ? "mr-10-5" : ""} />
          <div className="reg-16-bold">{text}</div>
        </div>
      </button>
    </div>
  );
}

export default Button;
