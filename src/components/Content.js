import React, { useState } from "react";
import Divider from "../components/Divider";
import Tab from "./Tab";
import QuestContent from "./QuestContent";

function Content() {
  // const [tes, setTes] = useState(true);
  const [quest, setQuest] = useState(true);
  const [place, setPlace] = useState(false);
  const [user, setUser] = useState(false);
  const [review, setReview] = useState(false);

  let content;
  if (quest) {
    content = <QuestContent />;
  } else if (place) {
    content = <div className="mt-40">place</div>;
  } else if (user) {
    content = <div className="mt-40">user</div>;
  } else if (review) {
    content = <div className="mt-40">review</div>;
  }

  return (
    <div>
      <Tab
        quest={quest}
        setQuest={setQuest}
        place={place}
        setPlace={setPlace}
        user={user}
        setUser={setUser}
        review={review}
        setReview={setReview}
      />

      <Divider />

      {content}

      {/* {quest ? (
        <div>
          <QuestContent />
        </div>
      ) : (
        <div>bukan quest</div>
      )} */}
    </div>
  );
}

export default Content;
