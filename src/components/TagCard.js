import React from "react";

function TagCard({ text }) {
  return (
    <div
      className="mr-2 reg-14 black-grey"
      style={{
        padding: "8px 20px",
        background: "#F7F8FA",
        borderRadius: "40px",
        border: "1px solid #EDEDED",
      }}
    >
      {text}
    </div>
  );
}

export default TagCard;
