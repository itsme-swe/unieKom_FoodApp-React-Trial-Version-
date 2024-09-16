import React from "react";
import ReactDOM from "react-dom/client";
import img1 from "/logo.jpg";

const HeaderComponent = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={img1} alt="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

// Outermost Element, aub puri app mae joh bhi components ayenge sub iskae andar ayenge
const AppLayout = () => {
  return (
    <div className="app">
      <HeaderComponent />
    </div>
  );
};

const root = ReactDOM.createRoot(document.querySelector(".root"));
root.render(<AppLayout />);
