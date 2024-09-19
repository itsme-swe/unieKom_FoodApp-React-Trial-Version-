import React from "react";
import ReactDOM from "react-dom/client";

import HeaderComponent from "./components/HeaderComponent";
import BodyComponent from "./components/BodyComponent";

//⇒ Yae data hamae backend sae milta hai, this data is in form of array of objects

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
