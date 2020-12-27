import React from "react";
import logo from "../../assets/logo.png";
import "./navBar.css";


export default function NavBar() {

  return (
    <div className="navBar">
      <img className='logo' alt="" src={logo} ></img>
      <h4 className="call">Find your Pokemon !!</h4>
    </div>
  )
}

