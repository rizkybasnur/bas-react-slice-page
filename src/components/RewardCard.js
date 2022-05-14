import React from "react";

function RewardCard({ src, text }) {
  return (
    <div
      className="mt-4 flex align-center "
      style={{
        padding: "20px 24px",
        background: "#fff8e5",
        borderRadius: "24px",
      }}
    >
      <img src={src} alt="" className="mr-4" height={60} width={60} />

      <div
        className="black"
        style={{
          fontWeight: "700",
          fontSize: "14px",
          lineHeight: "21px",
          width: "203px",
          maxHeight: "42px",
        }}
      >
        {text}
      </div>
    </div>
  );
}

export default RewardCard;
