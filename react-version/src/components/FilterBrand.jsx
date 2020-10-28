import React, { useContext } from "react";
import { ProductsContext } from "./../store/Products";
import "./../styles/filter-brand.css";

export default function FilterBrand() {
  const { availableBrands, selectedBrands, setSelectedBrands } = useContext(ProductsContext);
  return (
    <div id="filter-brand" className="filter">
      <h2 className="title">brandz</h2>
      <ul className="list">
        {availableBrands.map((brand, i) => (
          <li key={i}>
            <input
              type="checkbox"
              id={brand}
              value={brand}
              checked={selectedBrands.includes(brand)}
              onChange={(e) => setSelectedBrands(e.target.value)}
            />
            <label className="label" htmlFor={brand}>
              {brand}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}
