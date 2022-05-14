import React from "react";

function Abb() {
  return (
    // <div className="container-abb">
    //   <div className="bgred" style={{ height: "80px" }}>
    //     1
    //   </div>
    //   <div className="bgblue">2</div>
    //   <div className="bgblue minh">3</div>
    //   <div className="bgred">4</div>
    // </div>
    <div className="flex">
      <div className="bgblue  minh sticky" style={{ width: "300px" }}>
        a
      </div>
      <div className="bgred" style={{ width: "100%" }}>
        b
      </div>
    </div>
  );
}

export default Abb;
