import { LOGO_URL } from "../utils/constants";

const HeaderComponent = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Cart</li>
          <button className="login">Login</button>
        </ul>
      </div>
    </div>
  );
};

export default HeaderComponent;
