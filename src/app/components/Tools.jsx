import Image from "next/image";
import React from "react"
import notification from "../../../public/img/notification.svg"
import userImage from "../../../public/img/user.jpg"
import arrow from "../../../public/img/arrow.svg"

const Tools = (props) => {
  return (
    <div className="tool-container">
      <ul className="tool-list">
        <a href="https://www.netflix.com/browse" className="option-tool1">Niños</a>
        <li className="option-tool-alert">
            <Image id="notification" alt="" src={notification}></Image>
        </li>
        <div className="option-tool-dropdown">
          <div className="dropdown">
            <button id="btn-user" className="rotate-on-hover">
              <Image id="user-img" alt="" src={userImage} ></Image>
              <Image id="arrow"  alt="" src={arrow} width={13}></Image>
            </button>
            <div className="dropdown-content">
              <a href="#">hola</a>
              <a href="#">hola</a>
              <a href="#">hola</a>
              <a href="#">hola</a>
            </div>
          </div>
        </div>

      </ul>
    </div>
  )
};

export default Tools;
