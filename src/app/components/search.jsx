'use client';
import { React, useState } from "react";
import Image from "next/image";
import searchIcon from "../../../public/img/search.svg";


const Search = () => {
    const [isActive, setIsActive] = useState(false);
  
    const toggleDropdown = () => {
      setIsActive(!isActive);
    };
  
    return (
      <div className={`search-dropdown ${isActive ? "active" : ""}`}>
        <Image
          alt=""
          src={searchIcon}
          onClick={toggleDropdown}
          className="icon-search"
        />
        <input
          type="text"
          className={`search-input ${isActive ? "active" : ""}`}
          placeholder="Titulos, personas, géneros"
        />
      </div>
    );
  };

export default Search;
