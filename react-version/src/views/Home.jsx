import React from "react";
import { ProductsProvider } from "./../store/Products";
import Sidebar from "./../components/layout/Sidebar";
import ProductsGrid from "./../components/ProductsGrid";
import "./../styles/page.css";

export default function Home() {
  return (
    <div id="page-shop" className="page">
      <ProductsProvider>
        <Sidebar />
        <main id="content">
          <ProductsGrid />
        </main>
      </ProductsProvider>
    </div>
  );
}
