import React from "react";
import "./MainChat.scss"
import ListMessages from "./list-messages/ListMessages";
import FormMessages from "./form-messages/FormMessages";

const MainChat = () => {
  return (
    <main className="main">
      <section className="chat">
        <div className="container">
          <div className="chat__inner">
            <ListMessages />
            <FormMessages />
          </div>
        </div>
      </section>
    </main>
  );
};

export default MainChat;
