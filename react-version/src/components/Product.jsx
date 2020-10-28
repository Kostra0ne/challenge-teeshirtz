import React from "react";
import "./../styles/product.css";

export default function Product({ product }) {
  return (
    <li className="product">
      <h3 className="name">{product.name}</h3>
      <h4 className="brand">
        <i className="design">design by</i> <b>{product.brand}</b>
      </h4>
      <img
        className="image"
        src={`/assets/${product.image}`}
        alt={product.name}
      />
      <span className="price">{product.price} &euro;</span>
    </li>
  );
}
