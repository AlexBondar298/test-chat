import React from "react";
import "./Message.scss";

type MessageProps = {
  userId: string;
  id: string;
  avatar: string;
  name: string;
  message: string;
  time: string;
};

const Message = (props: MessageProps) => {
  const { userId, id, avatar, name, message, time } = props;
  return (
    <li id={id} className={`message ${userId === "1" ? "bot" : "user"}`}>
      <figure className="message__author-pic">
        <img className="img-cover" src={avatar} alt="Avatar" />
      </figure>
      <div className="message__text">
        <p>{message}</p>
        <span className="message__time"> {time.slice(10, 16)} </span>
      </div>
    </li>
  );
};

export default Message;
