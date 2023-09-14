import React from "react"

const Navbar = (props) => {
  return (
    <div id="option-container">
    <ul className="lista">
      <li className="optionone">Inicio</li>
      <li className="option">Series</li>
      <li className="option">Películas</li>
      <li className="optionwide">Novedades populares</li>
      <li className="optionlast">Mi lista</li>
      </ul>
    </div>
  )
};

export default Navbar;
