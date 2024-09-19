## Notes for future reference

1️⃣ Before starting react app, first import React and ReactDOM in main root folder and its generally **App.js**.

    import React from "react";

    import ReactDOM from "react-dom/client";

2️⃣ Phele hum browser elements / react element banae kae liye " React.createElement("tag", { }, "content") " ka use kiya karte thae. Phir humnae JSX use karni start ki jisae elements banana aur easy ho gaya.

    const jsxElement = <h1> Hello I am JSX </h1>;

3️⃣ JSX ka process kuch is tarah hota hai, phele jsx ka code convert hota hai React.createElement mae joh ki object hota hai, aur phir vo object render hota hai window pae as HTML Element. Aur yae sub babel manage karta hai, aur babel ko parcel manage karta hai.

**⇒ JSX is html like syntax or xml, it is not HTML .**

    JSX ⇒ React.createElement object ⇒ HTML Element(render)

    🔸Transpilling JSX code to HTML Element

4️⃣ React Components :

**1. Class Based Component**

**2. Functional Component(Latest Version) ⇒** Just a normal JS function which returns the peace of JSX element. Always name functional component with capital letter. We can use arrow functions also as **functional components**.

    const HeadingComponent = function(){
                    return <h2>I am functional component</h2>
                    }


    ⇒ Using arrow function
    const FunctionalComponent = () => {
                    return (<h2 className="app">
                    I am functional component
                    </h2>)
                };

To wrap functional component inside render we root.render(<HeadingComponent/>).

5️⃣ Aub agar humae 1 functional component ko kisi dusrae component kae andar pass karna hota hai toh hum use karte hai,angle brackets kae anadr component name pass karte jisae humae dusrae component kae andar pass karna hai . Aur is process ko hum bolte hai "component composition" .
Aur agar humae koi jsx element kisi component kae andar pass karna hai toh hum use karte hai curly braces "{jsxElement}".

    const Title = ( ) => {
            return (
                <h1 className="head" tabIndex="5">
                {jsxElement}  ◽ jsx element
                <HeadingComponent />  ◽ jsx component
                Functional Component using Arrow Function
                </h1>
                );
            };

    const root = ReactDOM.createRoot(document.querySelector(".head"));
    root.render(<Title />);

Agar hum **multiline component** likh rahe hai toh humae jsx component ki body ko parenthesis ' ( ) ' mae wrap karna hota hai, aur agar single line statement hai toh humae curly braces ' { } ' aur **return keyword** ki bhi jarurat nhi hoti hai.

    const FunctionComponent = ( ) => <h1> I am functional component </h1>;

6️⃣ Aub hum design kar rahe hai 1 **Food Delivery App** toh hamari app mae kaun kaunse components hongae.

**⇒ Planning Phase of any app :**

    ◼ Sabse Upper Header Section Ayega
        ∗ Logo
        ∗ Nav Items

    ◼ Phir ayega Body Section
        ∗ Search Component
        ∗ Restaurant Card Container
            ∗ Number of Restaurants

    ◼ Aur last mae ayega Footer Section
        ∗ Copyright
        ∗ Links
        ∗ Address
        ∗ Contact

7️⃣ **props :** Agar humae kisi functional component ko dynamically data pass karna hai toh hum use karte hai **"props",** stands for properties. Props are just normnal arguments to your function. In industry we say passing props to the component.

8️⃣ Use **json Viewer plugin** extension on chrome to see json data in a structured format.

9️⃣ **config Driven UI ⇒** Ka matlab hota hai hum apne UI ko data sae control karte hai. Config comes from backend.

🔟 **.map()** jub bhi map() function use karenge kisi bhi array ko render karne kae liye toh hame hamesha **key** as prop bhi pass karni jaruri hoti hai. Agar hum key pass nhi karte hai toh hamare pass joh error hamae console window mae aata hai vo hota hai **" Warning: Each child in a list should have a unique "key" prop. "**. Isliye hamesha hamae key as prop pass karni chaiye.

    const BodyComponent = () => {
    return (
    <div className="body">

    <div className="search-bar">Search</div>

    <div className="restro-container">
    { restroList.map((elements) => {
        return (
        <RestroCardComponent 🔸key={elements.info.id} restroData={elements} />
        );
        })}
        </div>
        </div>
        );
    };

Never use index values as keys in map() function bcoz its not recommended. The second parameter in map() is index only.

### ➡ Folder Structure of React App

**1. src folder ⇒** Sabse phele hum **src folder** banayenge aur uskae andar hamra pura source code aayega.

**2. App.js file** ko hum **src folder** kae andar rakhenge. Aur **App.js** hamari root level file hoti hai.

**3. components folder ⇒** Phir hum apne sare components 1 folder mae rakhenge joh ki hota hai components folder aur components folder hota hai again hamare **src folder** kae andar.

Aub jub bhi hum koi component likhenge toh vo hamae **export** bhi karna hoga.

    const Header = () => {
        return (
            <div className="head">
                <h1>Hello I am Header Component</h1>
            </div>
        )
    };

    export default Header;
