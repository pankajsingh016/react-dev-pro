import React from "react";

const Card = (props) => {
  return (
    <div className="bg-white rounded-2xl m-4 inline-block p-6 text-center">
      <img
        className="m-auto h-32 w-32 rouned-full mb-3"
        src={props.profile}
        alt=""
      />
      <h1 className="text-3xl font-semibold mb-4">{props.user}</h1>
      <h2 className="text-blue-400">{props.profession}</h2>
      <h2>
        {props.city}, {props.age}
      </h2>
      <button className="bg-gray-500 text-white px-4 py-2 mt-4 rounded font-medium">
        Add Friend
      </button>
    </div>
  );
};

export default Card;
