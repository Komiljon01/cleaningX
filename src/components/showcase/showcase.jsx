import Button from "../button/button";
import "./showcase.css";

function Showcase() {
  return (
    <section id="showcase">
      <div className="container">
        <div className="showcase__content">
          <h1 className="showcase__title">Quality cleaning for your home</h1>
          <p className="showcase__text">
            Condimentum mauris sit cursus amet id non neque pharetra nulla
            ornare sed facilisis senectus dapibus nibh ultrices eget suscipit
            aliquet et nulla magna lacus penatibus.
          </p>
          <div className="showcase__contacts flex align-center">
            <Button text={"Get a free quote"} bgColor={"btn-primary"} />
            <div className="showcase__contacts-call flex align-center">
              <img src="./images/tel.png" alt="tel icon" />
              <div className="contacts__call-content flex">
                <span className="contacts__call-text">Call us now</span>
                <a className="contacts-call-link" href="tel:(414) 567 - 2109">
                  (414) 567 - 2109
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Showcase;
