import "../styles/NavbarFooter.css";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  function getCurrentYear() {
    return new Date().getFullYear();
  }
  const currentYear = getCurrentYear();
  return (
    <div>
      <footer className="footer">
        <div className="container1">
          <div className="row1 mt-3 mb-5">
            <div className="footer-col">
              <h4>company</h4>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">about</Link>
                </li>
                <li>
                  <Link to="/service">our services</Link>
                </li>
                <li>
                  <Link to="/projects">suppliers</Link>
                </li>
                <li>
                  <Link to="/team">team</Link>
                </li>
                <li>
                  <Link to="/contact">contact us</Link>
                </li>
              </ul>
            </div>
            <div className="footer-col coll">
              <h4>services</h4>
              <ul>
                <li>
                  <Link to="#">FAQ</Link>
                </li>
                <li>
                  <Link to="#">shipping</Link>
                </li>
                <li>
                  <Link to="#">returns</Link>
                </li>
                <li>
                  <Link to="#">order status</Link>
                </li>
                <li>
                  <Link to="#">payment options</Link>
                </li>
                <li>
                  <Link to="#">second payment options</Link>
                </li>
              </ul>
            </div>
            <div className="footer-col coll2">
              <h4>Telephone</h4>
              <ul>
                <li>
                  <a href="tel:+251911209528">Mob +251-931138338</a>
                </li>
                <li>
                  <a href="tel:+251911930188">Mob +251-703239707</a>
                </li>
                <li>
                  <a href="tel:+251114160839">Tel 011-114160839</a>
                </li>
              </ul>
            </div>
            <div className="footer-col coll1">
              <h4>Follow Us</h4>
              <div className="social-links">
                <a href="https://www.facebook.com/betelhem.aytenew?mibextid=rS40aB7S9Ucbxw6v" target="_blank">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://www.linkedin.com/in/wongel-aytenew-5135301b8" target="_blank">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="https://t.me/EasyTechSupportAffairManagment" target="_blank">
                  <i className="fab fa-telegram"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-12 col-sm-12 col-lg-12 col-md-12">
              <p className="p">Copyright © {currentYear} Easy Consultancy. All rights reserved</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
