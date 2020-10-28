import React, { useContext, useState } from "react";
import { ProductsContext } from "./../store/Products";
import "./../styles/filter-price.css";

export default function FilterPrice() {
  const { maxPrice, minPrice, setFilterPrice } = useContext(ProductsContext);
  const [currentSelectedPrice, setCurrentSelectedPrice] = useState(maxPrice);

  const handlePriceChange = (evt) => {
    const newMaxPrice = Number(evt.target.value);
    setFilterPrice(newMaxPrice);
    setCurrentSelectedPrice(newMaxPrice);
  };

  return (
    <div id="filter-price" className="filter">
      <h2 className="title">mula</h2>
      <div className="wrap">
        <input
          type="range"
          onChange={handlePriceChange}
          min={minPrice}
          max={maxPrice}
        />
        <b>{currentSelectedPrice}&euro;</b>
      </div>
    </div>
  );
}
