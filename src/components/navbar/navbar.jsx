import Button from "../button/button";
import "./navbar.css";

function Navbar() {
  return (
    <section id="navbar">
      <div className="container">
        <div className="wrapper flex align-center justify-between">
          <div className="navbar__menu-links flex align-center">
            <a href="./">
              <img src="./images/logo.svg" alt="logo" />
            </a>

            <ul className="navbar__lists flex">
              <li>
                <a className="navbar__lists-link" href="/">
                  Home
                </a>
              </li>
              <li>
                <a className="navbar__lists-link" href="/">
                  About
                </a>
              </li>
              <li>
                <a className="navbar__lists-link" href="/">
                  Services
                </a>
              </li>
              <li>
                <a className="navbar__lists-link" href="/">
                  Articles
                </a>
              </li>
              <li>
                <a className="navbar__lists-link" href="/">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="navbar__register flex align-center">
            <a className="cart__link" href="/">
              Cart(0)
            </a>
            <Button text={"Get a free quote"} bgColor={"btn-primary"} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Navbar;
