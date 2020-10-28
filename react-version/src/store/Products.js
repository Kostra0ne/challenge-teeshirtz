import React, { createContext, useState } from "react";
import { tshirts } from "./../data/tshirts";

export const ProductsContext = createContext();

export function ProductsProvider({ children }) {
  const [maxPrice, setMaxPrice] = useState(null);
  const [products, setTshirts] = useState([...tshirts]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);

  function filterProducts() {
    const byPrice = (p) => (maxPrice ? p.price <= maxPrice : true);

    const byColor = (p) =>
      selectedColors.length
        ? p.colors.some((color) => selectedColors.includes(color))
        : true;

    const byBrand = (p) =>
      selectedBrands.length ? selectedBrands.includes(p.brand) : true;

    return [...tshirts].filter(byPrice).filter(byColor).filter(byBrand);
  }

  const value = {
    products,
    selectedBrands,
    selectedColors,
    availableBrands: [...new Set([...products].map((p) => p.brand))],
    availableColors: [
      ...new Set(
        products.reduce((acc, p) => {
          acc.push(p.colors.map((c) => c));
          return acc.flat();
        }, [])
      ),
    ],
    maxPrice: [...tshirts].sort((a, b) => b.price - a.price)[0].price,
    minPrice: [...tshirts].sort((a, b) => a.price - b.price)[0].price,

    setSelectedBrands: (brand) => {
      const brandIndex = selectedBrands.indexOf(brand);
      brandIndex === -1
        ? selectedBrands.push(brand)
        : selectedBrands.splice(brandIndex, 1);
      setTshirts(filterProducts());
    },

    setSelectedColors: (color) => {
      const colorIndex = selectedColors.indexOf(color);
      colorIndex === -1
        ? selectedColors.push(color)
        : selectedColors.splice(colorIndex, 1);
      setTshirts(filterProducts());
    },

    setFilterPrice: function (newMaxPrice) {
      setMaxPrice(newMaxPrice);
      setTshirts(filterProducts());
    },

    setInitialProducts: () => {
      setMaxPrice(null);
      setSelectedBrands([]);
      setSelectedColors([]);
      setTshirts([...tshirts]);
    },
  };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
}
