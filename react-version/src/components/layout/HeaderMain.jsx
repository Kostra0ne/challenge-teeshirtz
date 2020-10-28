import React from "react";
import Logo from "./../Logo";
import NavMain from "./NavMain";
import "./../../styles/header-main.css";

export default function HeaderMain() {
  return (
    <header id="header-main">
      <Logo brand="IronShoppaz" />
      <NavMain />
    </header>
  );
}
