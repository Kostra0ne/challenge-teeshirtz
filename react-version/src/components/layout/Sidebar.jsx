import React from "react";
import FilterBrand from "./../FilterBrand";
import FilterColor from "./../FilterColor";
import FilterPrice from "./../FilterPrice";
import FilterReset from "./../FilterReset";
import "./../../styles/sidebar.css";

export default function Sidebar() {
  return (
    <aside id="sidebar-main">
      <FilterReset />
      <FilterPrice />
      <FilterBrand />
      <FilterColor />
    </aside>
  );
}
