import React, { useEffect, useState } from "react";
import "./ProductCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import { faStar as farStar } from "@fortawesome/free-regular-svg-icons";

const ProductCard = ({ product }) => {
  const [selectedColor, setSelectedColor] = useState("yellow");
  const { name, popularityScore, weight, images, price } = product;

  useEffect(() => {
    // Sayfa değiştiğinde selectedColor'ı sıfırla
    setSelectedColor("yellow");
  }, [product.id]);

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  return (
    <div className="product-card col-4">
      <div className="product-image">
        <img src={images[selectedColor]} alt={`${name} - ${selectedColor}`} />
      </div>
      <div className="product-details">
        <h3>{name}</h3>
        <p className="product-price">
          {" "}
          ${((popularityScore + 1) * weight * 64.24).toFixed(1)} USD{" "}
        </p>
        <div className="color-options">
          {Object.keys(images).map((color) => (
            <button
              key={color}
              className={`color-button ${color} ${
                selectedColor === color ? "active" : ""
              }`}
              onClick={() => handleColorChange(color)}
            />
          ))}
        </div>
        <p className="selected-color">
          {selectedColor.charAt(0).toUpperCase() + selectedColor.slice(1)} Gold
        </p>

        <div className="popularity-score">
          {
            // Dolu yıldızlar
            Array(Math.floor(popularityScore / 20))
              .fill()
              .map((_, index) => (
                <FontAwesomeIcon
                  key={`full-star-${index}`}
                  icon={faStar}
                  className="fa-star"
                />
              ))
          }
          {
            // Yarım yıldız
            (popularityScore / 20) % 1 > 0 && (
              <FontAwesomeIcon
                icon={faStarHalfAlt}
                className="fa-star-half-alt"
              />
            )
          }
          {
            // Boş yıldızlar
            Array(5 - Math.ceil(popularityScore / 20))
              .fill()
              .map((_, index) => (
                <FontAwesomeIcon
                  key={`empty-star-${index}`}
                  icon={farStar}
                  className="fa-star-regular"
                />
              ))
          }
          <span> {Math.round((popularityScore / 20) * 10) / 10}/5</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
