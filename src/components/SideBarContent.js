import React from "react";
import discovery from "../assets/Discovery.svg";
import userss from "../assets/3 User.svg";
import wallet from "../assets/Wallet.svg";
import setting from "../assets/Setting.svg";
import avatar from "../assets/avatar.svg";
import logout from "../assets/Logout.svg";

function SideBarContent() {
  return (
    <>
      <div
        style={{
          padding: "24px 24px 0 24px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img src={avatar} alt="" />
        <div className="mt-24">
          <div className="text-center title-bold">NEA Singapore</div>
          <div className="text-center reg-14 dark-grey">neasg@mail.com</div>
        </div>
      </div>
      <div style={{ padding: "40px 24px 0 24px" }}>
        <div className="flex reg-16 dark-grey" style={{ padding: "15px 22px" }}>
          <img src={discovery} alt="" className="mr-12" />
          <div>My Quest</div>
        </div>
        <div className="flex reg-16 dark-grey" style={{ padding: "15px 22px" }}>
          <img src={userss} alt="" className="mr-12" />
          <div>User Base</div>
        </div>
        <div className="flex reg-16 dark-grey" style={{ padding: "15px 22px" }}>
          <img src={wallet} alt="" className="mr-12" />
          <div>Earnings</div>
        </div>
        <div className="flex reg-16 dark-grey" style={{ padding: "15px 22px" }}>
          <img src={setting} alt="" className="mr-12" />
          <div>Settings</div>
        </div>
        <div
          className="flex reg-16 dark-grey"
          style={{ padding: "15px 22px", marginTop: "373px" }}
        >
          <img src={logout} alt="" className="mr-12" />
          <div className="red">Sign Out</div>
        </div>
      </div>
    </>
  );
}

export default SideBarContent;
