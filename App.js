import React from "react";
import ReactDOM from "react-dom/client";

// Outermost Element, aub app ki joh bhi components ayenge sub iskae andar ayenge
const AppLayout = () => {
  return <div className="app"></div>;
};

const root = ReactDOM.createRoot(document.querySelector(".head"));
root.render(<Title />);
