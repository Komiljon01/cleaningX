import Button from "../button/button";
import "./footer.css";

function Footer() {
  return (
    <section id="footer">
      <div className="container">
        <div className="footer__sections">
          <div className="footer__intro">
            <h2 className="footer__intro-title">
              Quality cleaning for your home
            </h2>
            <p className="footer__intro-text">
              Lorem ipsum dolor sit amet cteturdo adipiscing elit, sed do
              eiusmo.
            </p>
            <div className="footer__shapes flex between">
              <div className="shape"></div>
              <div className="shape"></div>
              <div className="shape"></div>
              <div className="shape"></div>
              <div className="shape"></div>
            </div>
          </div>

          <div className="footer__contacts flex">
            <h3 className="footer__contacts-title">Contact us</h3>
            <ul className="footer__contacts-lists flex">
              <li>
                <p>1827 Nickel Road, Los Angeles, CA, 90017, United States</p>
              </li>
              <li>
                <a href="tel:(414) 567 - 2109">(414) 567 - 2109</a>
              </li>
              <li>
                <a href="mailto:contact@cleaning.com">contact@cleaning.com</a>
              </li>
            </ul>
          </div>

          <div className="footer__hours flex">
            <h3 className="footer__hours-title">Hours</h3>
            <ul className="footer__hours-lists flex">
              <li className="flex">
                <h4>Monday to Friday</h4>
                <p>6:00 AM - 9:00 PM</p>
              </li>
              <li className="flex">
                <h4>Saturday & Sunday</h4>
                <p>8:00 AM - 8:00 PM</p>
              </li>
            </ul>
          </div>

          <div className="footer__estimate flex">
            <h3 className="footer__estimate-title">Get a free estimate</h3>

            <div className="footer__estimate-content">
              <a className="footer__estimate-link" href="tel:(414) 567 - 2109">
                (414) 567 - 2109
              </a>
              <p className="footer__estimate-text">
                Lorem ipsum dolor sit amet ectetur adipiscing elit, sed do
                eiusmod.
              </p>
              <Button text={"Request a free quote"} bgColor={"btn-primary"} />
            </div>
          </div>
        </div>

        <div className="copyrights flex justify-between align-center">
          <a href="/">
            <img src="./images/logo.svg" alt="footer logo" />
          </a>

          <div className="copyrights__content flex">
            <p>
              Copyright © Cleaning X | Designed by{" "}
              <a href="/">BRIX Templates</a>
            </p>
            <p>
              - Powered by <a href="/">Webflow</a> - <a href="/">Webflow</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
