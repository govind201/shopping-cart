import React, { useState } from "react";
import ProductCard from "../components/ProductCard";
import Cart from "../components/Cart";

const products = [
  {
    id: 1,
    title: "Product 1",
    image: "https://source.unsplash.com/featured/?product/1",
  },
  {
    id: 2,
    title: "Product 2",
    image: "https://source.unsplash.com/featured/?product/2",
  },
];

function ShopPage() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (item, quantity, id) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === id);

    if (existingItem) {
      setCartItems((prevItems) =>
        prevItems.map((cartItem) =>
          cartItem.id === id
            ? { ...cartItem, quantity: cartItem.quantity + quantity }
            : cartItem
        )
      );
    } else {
      setCartItems((prevItems) => [...prevItems, { id, item, quantity: quantity }]);
    }
  };

  return (
    <div className="shop-page">
      <h1>Shop Page</h1>
      <div className="product-list">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            imageSrc={product.image}
            title={product.title}
            onAddToCart={(item, quantity) => handleAddToCart(item, quantity, product.id)}
          />
        ))}
      </div>
      <Cart cartItems={cartItems} />
    </div>
  );
}

export default ShopPage;
