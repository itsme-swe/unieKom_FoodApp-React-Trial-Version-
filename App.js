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
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestroCardComponent = (props) => {
  return (
    <div className="restro-cards" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="restro-logo"
        alt="kanha-logo"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/RX_THUMBNAIL/IMAGES/VENDOR/2024/7/8/39f176f8-0fdd-4818-b4d6-925ac9e5e933_44504.jpg"
      />
      <h3>{props.resName}</h3>
      <h4>{props.cuisine}</h4>
      <h4>4.4 Stars</h4>
      <h4>38 minutes</h4>
    </div>
  );
};

const BodyComponent = () => {
  return (
    <div className="body">
      <div className="search-bar">Search</div>
      <div className="restro-container">
        <RestroCardComponent
          resName="Tan-Sukh By Kanha"
          cuisine="North Indian, Desserts"
        />
        <RestroCardComponent resName="Kfc" cuisine="Fast Food" />
      </div>
    </div>
  );
};

// Outermost Element, aub puri app mae joh bhi components ayenge sub iskae andar ayenge
const AppLayout = () => {
  return (
    <div className="app">
      <HeaderComponent />
      <BodyComponent />
    </div>
  );
};

const root = ReactDOM.createRoot(document.querySelector(".root"));
root.render(<AppLayout />);
