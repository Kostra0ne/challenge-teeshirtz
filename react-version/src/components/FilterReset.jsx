import React, { useContext } from "react";
import { ProductsContext } from "./../store/Products";
import "./../styles/filter-reset.css";

export default function FilterReset() {
  const { setInitialProducts } = useContext(ProductsContext);

  return (
    <div id="filter-reset" className="filter">
      <button className="btn" onClick={setInitialProducts}>
        reset all
      </button>
    </div>
  );
}
