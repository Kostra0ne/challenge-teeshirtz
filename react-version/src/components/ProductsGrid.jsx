import React, { useContext } from "react";
import { ProductsContext } from "./../store/Products";
import Product from "./Product";
import "./../styles/products-grid.css";

export default function ProductsGrid() {
  const { products } = useContext(ProductsContext);

  return (
    <>
      {Boolean(products.length) ? (
        <ul id="products-grid">
          {products.map((product, i) => (
            <Product key={i} product={product} />
          ))}
        </ul>
      ) : (
        <p>We're sorry, no product available for your query</p>
      )}
    </>
  );
}
