import React from "react";
import Card from "./Card";

import "./CardList.css";

const CardList = ({ robots }) => {
  const cardComponent = robots.map((user, i) => {
    return (
      <Card
        key={i}
        id={robots[i].id}
        name={robots[i].name}
        username={robots[i].username}
        email={robots[i].email}
      />
    );
  });

  return (
    <>
      <div className="card">{cardComponent}</div>
    </>
  );
};

export default CardList;
