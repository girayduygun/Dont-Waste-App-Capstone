import "./Header.scss";
import { useState } from "react";
import logo from "../../assets/images/logo.jpg";
import { Link } from "react-router-dom";

function Header() {
  const [userName, setUserName] = useState(localStorage.getItem("userName"));

  function logout() {
    localStorage.removeItem("email");
    localStorage.removeItem("token");
    localStorage.removeItem("userName");
    localStorage.removeItem("userId");
    window.location.href = "/";
  }
  return (
    <>
      <div className="header">
        <Link to="/" className="header__logo">
          <img
            src={logo}
            className="header__logo-image"
            alt="dont_waste_logo"
          />
        </Link>
        {userName === null ? (
          <div className="header__navbar">
            <Link to="/login" className="header__navbar-link">
              <p className="header__navbar-button">Login</p>
            </Link>
            <Link to="/signup" className="header__navbar-link">
              <p className="header__navbar-button">Sign Up</p>
            </Link>
          </div>
        ) : (
          <>
            <p className="header__welcome-text">Welcome <span>{userName}</span></p>
            <button onClick={logout} className="header__navbar-link">
              <p className="header__navbar-button">Log Out</p>
            </button>
          </>
        )}
      </div>
    </>
  );
}

export default Header;
