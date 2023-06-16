import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

function ProductCard({ imageSrc, title, onAddToCart }) {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const handleAddToCart = () => {
    onAddToCart(title, quantity);
    setQuantity(1);
  };

  return (
    <div className="product-card">
      <img src={imageSrc} alt={title} />
      <h2>{title}</h2>
      <div className="quantity-container">
        <button className="quantity-btn" onClick={handleDecrement}>
          <FaMinus />
        </button>
        <input
          type="number"
          className="quantity-input"
          value={quantity}
          readOnly
        />
        <button className="quantity-btn" onClick={handleIncrement}>
          <FaPlus />
        </button>
      </div>
      <button className="button" onClick={handleAddToCart}>
        Add To Cart
      </button>
    </div>
  );
}

export default ProductCard;
