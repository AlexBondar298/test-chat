import React from "react";
import "./HistoryShat.scss";
import { useAppSelector } from "../../../../../redux/hook";

const HistoryShat = ({ active }: { active: boolean }) => {
  const { listMessages } = useAppSelector((state) => state.message);

  return (
    <div className={`history ${active ? "active" : ""}`}>
      {listMessages.length !== 0 ? (
        <ul className="history__list">
          {listMessages.map((message, i) => (
            <li className="history__item" key={i}>
              <span className="history__time">{message.time}</span>
              <span className="history__name">{message.name}</span>
              <span className="history__message">{message.message}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default HistoryShat;
