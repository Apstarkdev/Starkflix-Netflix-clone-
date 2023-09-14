import Image from "next/image";
import React from "react"
import notification from "../../../public/img/notification.svg"

const Tools = (props) => {
  return (
    <div className="tool-container">
      <ul className="tool-list">
        <li className="option-tool">Kids</li>
        <li className="option-tool">
            <Image src={notification}></Image>
        </li>
        <li className="option-tool">X</li>
        <li className="option-tool">X</li>
        <li className="option-tool">X</li>
      </ul>
    </div>
  )
};

export default Tools;
