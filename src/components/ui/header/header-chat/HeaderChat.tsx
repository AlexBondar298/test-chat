import React, { useState } from "react";
import Button from "../../../shared/button/button";
import HistoryIcon from "../../../../assets/icons/history-icon.svg";
import "./HeaderChat.scss";
import HistoryShat from "./history/HistoryShat";

const HeaderChat = () => {
  const [openHistory, setOpenHistory] = useState<boolean>(false);

  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <h2 className="header__title">TEST CHAT </h2>
          <Button onClick={() => setOpenHistory((prev) => !prev)}>
            <img src={HistoryIcon} alt="history" />
          </Button>
          <HistoryShat active={openHistory} />
        </div>
      </div>
    </header>
  );
};

export default HeaderChat;
