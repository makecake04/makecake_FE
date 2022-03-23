import React from "react";

import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";

//import css
import { NotiWrap } from "./style";

const Noti = (props) => {
  const navigate = useNavigate();
  return (
    <NotiWrap>
      <div>
        <div className="title">
          <FontAwesomeIcon
            icon={faAngleLeft}
            className="left"
            onClick={() => {
              navigate("/");
            }}
          />
          <h3>알림</h3>
        </div>
        <hr />
      </div>
    </NotiWrap>
  );
};

export default Noti;
