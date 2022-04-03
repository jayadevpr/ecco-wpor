import "./TopBar.css"
import logo from "../logo/ecco_logo.png"

function TopBar() {
    return (
        <div className="top">
            <div className="topLeft">
                <img className="TopLogo" src={logo} alt="Ecco"></img>
            </div>
            <div className="topRight">
                <ul className="topList">
                    <li className="topListItem">Home</li>
                    <li className="topListItem">About Us</li>
                    <li className="topListItem">Products</li>
                    <li className="topListItem">Contact Us</li>
                </ul>
            </div>
        </div>
    );
}

export default TopBar