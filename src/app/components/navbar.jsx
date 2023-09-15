import React from "react"

const Navbar = (props) => {
  return (
    <div id="option-container">
    <ul className="lista">
      <li className="optionMenu">Inicio</li>
      <li className="option">Series</li>
      <li className="option">Películas</li>
      <li className="option-wide">Novedades populares</li>
      <li className="option-last">Mi lista</li>
      </ul>
    </div>
  )
};

export default Navbar;
