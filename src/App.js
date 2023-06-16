import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import "./App.css";

function App() {
  return (
    <Router>
      <nav >
        <ul >
          <li>
            <Link to="/" className="button">
              Home
            </Link>
          </li>
          <li>
            <Link to="/shop" className="button">
              Shop
            </Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
      </Routes>
    </Router>
  );
}

export default App;
