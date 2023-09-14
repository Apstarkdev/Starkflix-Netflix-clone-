import React from "react"
import logo from "../../../public/img/Starkflix.svg"
import Image from "next/image";

import Navbar from "./navbar";
import Search from "./search";
import Tools from "./Tools";

const Topbar = (props) => {

    return (
    <div>
      <div className="logo-container">
        <Image src={logo} className="logo"/>
        <Navbar/>
        <Search></Search>
        <Tools></Tools>
      </div>
    </div>
  )
};

export default Topbar;
