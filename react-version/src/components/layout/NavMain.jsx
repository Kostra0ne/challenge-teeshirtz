import React from "react";
import { NavLink } from "react-router-dom";
import "./../../styles/nav-main.css";

export default function NavMain() {
  return (
    <nav id="nav-main">
      <NavLink exact to="/">Home</NavLink>
      <NavLink to="/dashboard">Dashboard</NavLink>
    </nav>
  );
}
