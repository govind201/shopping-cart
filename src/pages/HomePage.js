import React from "react";
import "./HomePage.css";

function HomePage() {
  const products = [
    {
      id: 1,
      name: "Shoes",
      price: "$19.99",
    },
    {
      id: 2,
      name: "Shirts",
      price: "$24.99",
    },
    {
      id: 3,
      name: "Phone Case",
      price: "$14.99",
    },
  ];

  const categories = [
    {
      id: 1,
      name: "Fashion",
    },
    {
      id: 2,
      name: "Electronics",
    },
  ];

  return (
    <div className="home-page">
      <div className="hero-section">
        <h1 className="title">Welcome to our Online Store</h1>
        <p className="subtitle">Discover amazing products for every need</p>
        <a href="/shop" className="button">
          Shop Now
        </a>
      </div>

      <div className="featured-products">
        <h2 className="section-title">Featured Products</h2>
        <div className="product-list">
          {products.map((product) => (
            <div className="product-item" key={product.id}>
              <h3 className="product-name">{product.name}</h3>
              <p className="product-price">{product.price}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="popular-categories">
        <h2 className="section-title">Popular Categories</h2>
        <div className="category-list">
          {categories.map((category) => (
            <div className="category-item" key={category.id}>
              <h3 className="category-name">{category.name}</h3>
            </div>
          ))}
        </div>
      </div>

      <div className="newsletter-section">
        <h2 className="section-title">Subscribe to Our Newsletter</h2>
        <p className="newsletter-description">
          Stay updated with the latest deals and offers!
        </p>
        <form className="newsletter-form">
          <input
            type="email"
            placeholder="Enter your email"
            className="newsletter-input"
          />
          <button type="button" className="button">
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
}

export default HomePage;
