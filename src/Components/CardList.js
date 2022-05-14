import React from "react";
import Card from "./Card";

import "./CardList.css";

const CardList = ({ robots }) => {
  // const cardComponent = robots.map((user, i) => {
  //   return (
  //     <Card
  //       key={i}
  //       id={robots[i].id}
  //       name={robots[i].name}
  //       username={robots[i].username}
  //       email={robots[i].email}
  //     />
  //   );
  // });

  // if (true) {
  //   throw new Error("noooo! This is not good");
  // }

  return (
    <>
      <div className="card">
        {robots.map((user, i) => {
          return (
            <Card
              key={i}
              id={robots[i].id}
              name={robots[i].name}
              username={robots[i].username}
              email={robots[i].email}
            />
          );
        })}
      </div>
    </>
  );
};

export default CardList;
