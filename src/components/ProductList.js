import React, { useState } from "react";
import ProductCard from "./ProductCard";
import "./ProductList.css";

const ProductList = ({ products }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const productsToShow = 4; // Göstermek istediğiniz ürün sayısı

  const goNext = () => {
    if (currentIndex + productsToShow < products.length) {
      setCurrentIndex(currentIndex + productsToShow);
    }
  };

  const goPrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - productsToShow);
    }
  };

  return (
    <div className="product-carousel">
      <div className="product-list">
        {products
          .slice(currentIndex, currentIndex + productsToShow)
          .map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
      </div>

      {/* Sağ ve Sol oklar */}
      <button className="carousel-btn prev" onClick={goPrev}>
        &lt;
      </button>
      <button className="carousel-btn next" onClick={goNext}>
        &gt;
      </button>
    </div>
  );
};

export default ProductList;
