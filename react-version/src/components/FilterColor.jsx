import React, { useContext } from "react";
import { ProductsContext } from "./../store/Products";
import "./../styles/filter-color.css";

export default function FilterColor() {
  const { availableColors, selectedColors, setSelectedColors } = useContext(
    ProductsContext
  );

  return (
    <div className="filter">
      <h2 className="title">colorz</h2>
      <ul id="filter-color" className="list-grid">
        {availableColors.map((color, i) => (
          <li
            className={selectedColors.includes(color) ? "color is-selected" : "color"}
            key={i}
            style={{ background: color }}
            onClick={() => setSelectedColors(color)}
          ></li>
        ))}
      </ul>
    </div>
  );
}
