import React from "react";

function Tab({
  quest,
  setQuest,
  place,
  setPlace,
  user,
  setUser,
  review,
  setReview,
}) {
  const selectQuest = () => {
    setQuest(true);
    setPlace(false);
    setUser(false);
    setReview(false);
  };

  const selectPlace = () => {
    setQuest(false);
    setPlace(true);
    setUser(false);
    setReview(false);
  };

  const selectUser = () => {
    setQuest(false);
    setPlace(false);
    setUser(true);
    setReview(false);
  };

  const selectReview = () => {
    setQuest(false);
    setPlace(false);
    setUser(false);
    setReview(true);
  };

  return (
    <div className="flex align-center">
      <div className="flex">
        <div
          className={`py-18 px-50 reg-16 black cursor-pointer ${
            quest ? "active" : ""
          } `}
          onClick={selectQuest}
        >
          Quest Info
        </div>
        <div
          className={`py-18 px-50 reg-16 black cursor-pointer ${
            place ? "active" : ""
          } `}
          onClick={() => {
            selectPlace();
          }}
        >
          Places
        </div>
        <div
          className={`py-18 px-50 reg-16 black cursor-pointer ${
            user ? "active" : ""
          } `}
          onClick={selectUser}
        >
          Users
        </div>
        <div
          className={`py-18 px-50 reg-16 black cursor-pointer ${
            review ? "active" : ""
          } `}
          onClick={selectReview}
        >
          Reviews
        </div>
      </div>
    </div>
  );
}

export default Tab;
