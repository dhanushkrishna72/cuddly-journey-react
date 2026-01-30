import React from "react";

const Card = (props) => {
  return (
    <div className="card">
      <img
        src="https://plus.unsplash.com/premium_photo-1764702327295-2ff77a60954f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDY0fENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D"
        alt=""
      />
      <h1>{props.user}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
        quaerat eum aspernatur?
      </p>
      <button className="btn">View Profile</button>
    </div>
  );
};

export default Card;
