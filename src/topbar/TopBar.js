import { useState } from "react";
import "./TopBar.css";
import logo from "../logo/ecco_logo.png";

function TopBar() {
  return (
    <div className="top">
      <div className="topLeft">
        <img className="TopLogo" src={logo} alt="Ecco"></img>
      </div>
      <div className="topRight">
        <NavBar />
      </div>
    </div>
  );
}

//Once expanded, navbar is not collapsing again

const NavBar = (props) => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded={!isNavCollapsed ? true : false}
        aria-label="Toggle navigation"
        onClick={handleNavCollapse}
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className={`${isNavCollapsed ? "collapse" : ""} navbar-collapse`}
        id="navbarNavAltMarkup"
      >
        <div className="navbar-nav">
          <a className="nav-item nav-link active" href="#">
            Home
          </a>
          <a className="nav-item nav-link" href="#">
            About Us
          </a>
          <a className="nav-item nav-link" href="#">
            Products
          </a>
          <a className="nav-item nav-link" href="#">
            Contact Us
          </a>
        </div>
      </div>
    </nav>
  );
};

export default TopBar;
