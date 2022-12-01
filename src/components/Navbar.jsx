// React Hooks
import { useState } from "react";

// React Icons
import { FiMenu } from "react-icons/fi";
import { ImCross } from "react-icons/im";

// Styles
import "../scss/navbar.scss";

const Navbar = () => {
  const [active, setActive] = useState(false);
  return (
    <nav className="navbar">
      <img className="navbar__logo" src={"/images/logonav.svg"}/>
      <div className={`navbar__links ${active && "active"}`}>
        <ul>
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <a href="#">Products</a>
          </li>
          <li>
            <a href="#">About us</a>
          </li>
          <li>
            <a href="#">Careers</a>
          </li>
          <li>
            <a href="#">Community</a>
          </li>
        </ul>
      </div>
      <button className="navbar__button">Get Started</button>
      {
        !active ? <FiMenu className="toggle-button" onClick={() => setActive(!active)} /> :
        <ImCross className="toggle-button" onClick={() => setActive(!active)} />
      }
      

    </nav>
  )
}

export default Navbar