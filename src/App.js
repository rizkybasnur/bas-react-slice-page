import "./App.css";
import hero from "./assets/hero-image.svg";
import logo from "./assets/logo-questeon.svg";
import star from "./assets/Star.svg";
import currency from "./assets/CurrencyCircleDollar.svg";
import pin from "./assets/MapPin.svg";
import time from "./assets/TimeCircle.svg";
import Button from "./components/Button";
import edit from "./assets/Edit.svg";
import DeleteButton from "./assets/Delete.svg";
import login from "./assets/Login.svg";
import Content from "./components/Content";
import { useState } from "react";
import Person1 from "./assets/Person1.svg";
import Person2 from "./assets/Person2.svg";
import Person3 from "./assets/Person3.svg";
import right from "./assets/CaretRight.svg";
// import Abb from "./Abb";

import SideBarContent from "./components/SideBarContent";

function App() {
  const [users, setUsers] = useState([
    {
      img: Person1,
      username: "Lee_JiEun",
      status: "joined this quest",
      date: "14 Jan . 15:30",
    },
    {
      img: Person2,
      username: "Dennies_2",
      status: "joined this quest",
      date: "14 Jan . 13:36",
    },
    {
      img: Person3,
      username: "Lee_JiEun",
      status: "joined this quest",
      date: "13 Jan . 12:51",
    },
  ]);

  return (
    // <Abb />
    <div className="container">
      {/* <div className="tes sticky"> */}
      {/* <div className="container "> */}
      <div id="item-1">
        <img src={logo} alt="" />
      </div>
      <div id="item-3" style={{ minHeight: "100vh" }}>
        <SideBarContent />
      </div>
      {/* </div> */}
      {/* </div> */}

      {/* nav route */}
      <div
        id="item-2"
        style={{
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
          paddingLeft: "32px",
        }}
      >
        <div className="mr-10 dark-green reg-16">Quest</div>
        <img src={right} alt="" className="mr-10"></img>
        <div className="dark-grey reg-16">Botanical Treasure</div>
      </div>

      {/* content */}

      <div id="item-4">
        {/* hero image */}

        <img src={hero} alt="" width={"100%"} />

        {/* content */}

        <div style={{ margin: "32px 24px 80px 50px" }}>
          <div className="flex justify-between align-center">
            <div className="h2-bold">Botanical Treasure</div>
            <div className="flex align-center">
              <Button text={"Test Quest"} background={"b-green"} />
              <Button
                text={"Edit"}
                icon={edit}
                color={"dark-green"}
                background={"b-none"}
              />

              <img
                src={DeleteButton}
                alt=""
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  width: 25,
                  height: 25,
                  backgroundColor: "#fff",
                  borderRadius: "50%",
                  padding: 15,
                }}
              />
            </div>
          </div>

          <div className="flex mt-24 align-center">
            <div className="mr-5 reg-16-bold black-grey flex align-center">
              <img src={star} alt="" style={{ marginRight: "6px" }} />
              <div>4.8</div>
            </div>
            <div className="mr-5 reg-16-bold black-grey flex align-center">
              <img src={currency} alt="" style={{ marginRight: "6px" }} />
              <div className="flex align-center">Free</div>
            </div>
            <div className="mr-5 reg-16-bold black-grey flex align-center">
              <img src={time} alt="" style={{ marginRight: "6px" }} />
              <div>Timed Quest</div>
            </div>
            <div className="reg-16-bold black-grey flex align-center">
              <img src={pin} alt="" style={{ marginRight: "6px" }} />
              <div>Singapore, Changi</div>
            </div>
          </div>

          <div className="mt-6 container-content">
            <Content />

            <div style={{ marginLeft: "24px" }}>
              <div>
                <div className="bg-light-green pa-24 radius-24">
                  <div className="text-bold black-grey">Status</div>
                  <select className="full-width radius-24 px-24 py-14 reg-14 mt-8">
                    <option value="DRAFT">Draft</option>
                    <option value="DRAFT">On Review</option>
                    <option value="DRAFT">Publish</option>
                  </select>
                </div>
              </div>

              <div className="mt-40">
                <div className="flex">
                  <img src={login} alt="" className="mr-10-5" />
                  <div className=" title-bold">Recent User Join</div>
                </div>

                <div className=" mt-24">
                  {users.map((user) => {
                    return (
                      <div className=" flex align-start bg-light-green pa-20 radius-24 mb-20">
                        <img
                          src={user.img}
                          alt=""
                          className="mr-20"
                          width={40}
                        />
                        <div className="dark-grey ">
                          <div className="text-bold">{user.username}</div>
                          <div className="reg-small">{user.status}</div>
                          <div className="reg-small mt-8">{user.date}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
