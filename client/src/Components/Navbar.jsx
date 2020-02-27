import React from "react";

function Navbar(props) {
  return (
    <ul className="navBox" id="navigationBar">
      <li onClick={() => props.changeState(0)} className="navItem">
        Home
      </li>
      <li onClick={() => props.changeState(2)} className="navItem">
        Props
      </li>
      <li onClick={() => props.changeState(3)} className="navItem">
        Arrows
      </li>
      <li onClick={() => props.changeState(4)} className="navItem">
        setInterval( )
      </li>
      <li onClick={() => props.changeState(1)} className="navItem">
        Forms
      </li>
      <li onClick={() => props.changeState(5)} className="navItem">
        PrevValue
      </li>
    </ul>
  );
}

export default Navbar;
