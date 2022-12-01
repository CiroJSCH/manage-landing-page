// Components
import NewsletterForm from "./NewsletterForm";

// Icons
import {
  AiFillFacebook,
  AiFillYoutube,
  AiOutlineTwitter,
  AiOutlineInstagram,
} from "react-icons/ai";
import { BsPinterest } from "react-icons/bs";

// Images
import logo from "/images/logo.svg";

// Styles
import "../scss/bottomFooter.scss";

const BottomFooter = () => {
  return (
    <div className="BottomFooter">
      <NewsletterForm />
      <div className="links">
        <ul>
          <li>Home</li>
          <li>Pricing</li>
          <li>Products</li>
          <li>About us</li>
          <li>Careers</li>
          <li>Community</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
      <div className="contact">
        <div className="social">
          <AiFillFacebook className="social__icon" />
          <AiFillYoutube className="social__icon" />
          <AiOutlineTwitter className="social__icon" />
          <BsPinterest className="social__icon" />
          <AiOutlineInstagram className="social__icon" />
        </div>
        <div className="logo">
          <img src={logo} alt="Manage Logo" />
        </div>
      </div>
      <p className="copyright">Copyright {new Date().getFullYear()}. All rights reserved</p>
    </div>
  );
};

export default BottomFooter;
