import React, { useState, useEffect, useRef } from "react";

import "./ListMessages.scss";

import Message from "../message/Message";

import { useAppSelector } from "../../../../../redux/hook";
import Button from "../../../../shared/button/button";

const ListMessages = () => {
  const { listMessages } = useAppSelector((state) => state.message);

  const containerRef = useRef<HTMLDivElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [showScrollDown, setShowScrollDown] = useState(false);

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  useEffect(() => {
    scrollToBottom();
  }, [listMessages]);

  const handleScroll = () => {
    if (!containerRef.current) return;

    const { scrollTop, scrollHeight, clientHeight } = containerRef.current;

    const isNearBottom = scrollHeight - scrollTop - clientHeight < 100;

    setShowScrollDown(!isNearBottom);
  };

  return (
    <div
      className="container__messages scrollbar-style"
      ref={containerRef}
      onScroll={handleScroll}
    >
      <ul className="list-messages">
        {listMessages.length !== 0
          ? listMessages.map((message, i) => (
              <Message
                key={i}
                id={message.id}
                userId={message.userId}
                name={message.name}
                avatar={message.avatar}
                time={message.time}
                message={message.message}
              />
            ))
          : null}
      </ul>
      <div ref={messagesEndRef}></div>

      {showScrollDown && (
        <Button
          className="scroll-down-button"
          onClick={scrollToBottom}
          aria-label="Прокрутить вниз"
          type="button"
        >
          ↓
        </Button>
      )}
    </div>
  );
};

export default ListMessages;
