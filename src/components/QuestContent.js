import React, { useState } from "react";
import mapMarker from "../assets/map-marker-check-outline.svg";
import clipboard from "../assets/clipboard-check-outline.svg";
import gokart from "../assets/go-kart-track.svg";
import rewardLogo from "../assets/botanicalLogo.svg";
import RewardCard from "../components/RewardCard";
import TagCard from "../components/TagCard";
import garden from "../assets/garden.svg";
import Divider from "../components/Divider";

function QuestContent() {
  const [tagArray, setTagArray] = useState([
    "botanical",
    "treasure",
    "singapore",
    "fun",
    "beginner",
  ]);
  return (
    <>
      <div
        className="reg-14 black-grey"
        style={{ marginTop: "40px", maxWidth: "95%" }}
      >
        The quests given by Ant Emicheun seem to depend on class somehow. Level
        1 Iop and Sacrier got tofu under the microscope, while a level 1 Cra got
        Arachnee sandwich. Since Ant is the only one giving elevator quests,
        this irregularity is probably limited to him only. Will need some
        testing, though. - Dashiva 23:37, 7 March 2006 (UTC)
        <br></br>
        <br></br>
        Guys and people there are little blue cloaked monsters in astrub forest,
        i dont know the qesu i c ppl fioght em not often but when they think its
        cool or something, its not a quest yet but u fight em for something, u
        start quest by talking with a lady named sweetness at dofus nighttime.
        RingWarior
      </div>

      <div className="flex mt-6">
        {tagArray.map((tag) => {
          return <TagCard text={tag} />;
        })}
      </div>

      <div className="flex mt-40">
        <div style={{ marginRight: "40px" }}>
          <img src={mapMarker} alt="" />
          <div className="reg-14 dark-grey">Check Point</div>
          <div className="h3-bold black" style={{ width: "109px" }}>
            2
          </div>
        </div>
        <div style={{ marginRight: "40px" }}>
          <img src={clipboard} alt="" />
          <div className="reg-14 dark-grey">Task</div>
          <div className="h3-bold black" style={{ width: "109px" }}>
            4
          </div>
        </div>
        <div style={{ marginRight: "40px" }}>
          <img src={gokart} alt="" />
          <div className="reg-14 dark-grey">Route</div>
          <div className="h3-bold black" style={{ width: "109px" }}>
            3.5{" "}
            <span
              style={{
                weight: "700",
                fontSize: "14px",
                lineHeight: "21px",
              }}
            >
              km
            </span>
          </div>
        </div>
      </div>

      <div className="mt-40">
        <div className="title-bold">Reward</div>
        <div
          className="mt-16"
          style={{ maxWidth: "327px", maxHeight: "100px" }}
        >
          <RewardCard
            src={rewardLogo}
            text={"STATUE OF SINGAPORE BOTANICAL GARDEN"}
          />
        </div>
      </div>

      <div className="mt-40">
        <div className="title-bold">Highlight</div>
        <div className="mt-16">
          <ul className="ml-17">
            <li>
              The quests given by Ant Emicheun seem to depend on class somehow
            </li>
            <li>
              Level 1 Iop and Sacrier got tofu under the microscope, while a
              level 1 Cra got Arachnee
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-40">
        <Divider />
      </div>

      <div className="mt-40">
        <div className="h3-bold">Intro</div>
        <div className="mt-40 flex align-start" style={{ maxWidth: "95%" }}>
          <img src={garden} alt="" width={300} />
          <div className="ml-46">
            <div>
              The quests given by Ant Emicheun seem to depend on class somehow.
              Level 1 Iop and Sacrier got tofu under the microscope, while a
              level 1 Cra got Arachnee sandwich. Since Ant is the only one
              giving elevator quests, this irregularity is probably limited to
              him only. Will need some testing, though.
            </div>

            <div className="mt-32">
              <div className="title-bold">
                Facts <span className="red">⁉️</span>{" "}
              </div>
              <div>
                Guys and people there are little blue cloaked monsters in astrub
                forest, i dont know the qesu i c ppl fioght em not often but
                when they think its cool or something
              </div>
            </div>

            <div className="mt-32">
              <div className="title-bold">Tips ✨</div>
              <div>
                Guys and people there are little blue cloaked monsters in astrub
                forest, i dont know the qesu i c ppl fioght em not often but
                when they think.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-40">
        <Divider />
      </div>

      <div className="mt-40">
        <div className="h3-bold">Conclusion</div>
        <div className="mt-16" style={{ maxWidth: "95%" }}>
          The quests given by Ant Emicheun seem to depend on class somehow.
          Level 1 Iop and Sacrier got tofu under the microscope, while a level 1
          Cra got Arachnee sandwich. Since Ant is the only one giving elevator
          quests, this irregularity is probably limited to him only. Will need
          some testing, though. - Dashiva 23:37, 7 March 2006 (UTC)
          <br />
          <br />
          Guys and people there are little blue cloaked monsters in astrub
          forest, i dont know the qesu i c ppl fioght em not often but when they
          think its cool or something, its not a quest yet but u fight em for
          something, u start quest by talking with a lady named sweetness at
          dofus nighttime. RingWarior
        </div>
      </div>
    </>
  );
}

export default QuestContent;
