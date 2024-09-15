import React from "react";
import ReactDOM from "react-dom/client";

// React Element
const jsxElement = <h1 className="ele1">I am JSX Element</h1>;

// Functional Component
const HeadingComponent = function () {
  return <h2>I am functional component</h2>;
};

// Functional Component using Arrow function
const Title = () => {
  return (
    <h1 className="head" tabIndex="5">
      {jsxElement}
      <HeadingComponent />
      Functional Component using Arrow Function
    </h1>
  );
};

const root = ReactDOM.createRoot(document.querySelector(".head"));
root.render(<Title />);
