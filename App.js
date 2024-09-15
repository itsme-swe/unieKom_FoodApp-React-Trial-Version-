/*
1️⃣ Before starting react app, first import React and ReactDOM.

2️⃣ Phele hum browser elements banae kae liye " React.createElement("tag", {}, "content") " ka use kiya karte thae. Phir humnae JSX start karni shuru ki jisae elements banana aur easy ho gaya.

3️⃣ Example for JSX :  const jsxElement = <h1>Hello I am JSX</h1>;  

JSX ka process kuch is tarah hota hai, phele jsx ka code convert hota hai React.createElement Object mae, aur phir vo object render hota hai window pae as HTML Element. Aur yae sub babel manage karta hai. "JSX is html like syntax or xml, it is not HTML".

🔸Process of transpilling JSX code to HTML Element
  JSX ⇒ React.createElemen Object ⇒ HTML Element(render)

4️⃣ React Components :  

1. Class Based Component

2. Functional Component(Latest Version) ⇒ Just a normal JS function which returns the peace of JSX element. Always name functional component with capital letter. We can use arrow functions also in functional components. 

E.g ⇒ const HeadingComponent = function(){  return <h2>I am functional component</h2>}

To wrap functional component inside render we root.render(<HeadingComponent/>).

5️⃣ Aub agar humae 1 functional component ko kisi dusrae component kae andar pass karna hota hai toh hum use karte hai "<ComponentName/>". Hum angle brackets kae anadr component name pass karte jisae humae dusrae component kae andar pass karna hai . Aur is process ko hum bolte hai  "component composition" .

6️⃣

7️⃣
 */

import React from "react";
import ReactDOM from "react-dom/client";

// React Element
const jsxElement = <h1 className="ele1">I am JSX Element</h1>;

// Functional Component
const HeadingComponent = function () {
  return <h2>I am functional component</h2>;
};

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
