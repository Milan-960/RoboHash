import React from "react";

const Card = (props) => {
  //discturing here
  // const { name, email, id } = props;

  return (
    <>
      <div>
        <h1>{props.id}</h1>
        <img alt="robots" src={`https://robohash.org/${props.id}`} />
        <div>
          <h2>{props.name}</h2>
          <p>{props.username}</p>
          <p>{props.email}</p>
        </div>

        {/* This way we can disctrue an arry
        <div>
          <h2>{name}</h2>
          <p>{username}</p>
          <p>{email}</p>
        </div> */}
      </div>
    </>
  );
};

export default Card;
