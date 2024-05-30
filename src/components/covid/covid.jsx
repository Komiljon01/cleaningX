import Button from "../button/button";
import "./covid.css";

function Covid() {
  return (
    <section id="covid">
      <div className="container">
        <div className="wrapper flex justify-between align-center">
          <div className="covid__img">
            <img src="./images/covid.png" alt="covid img" />
          </div>
          <div className="covid__content">
            <p className="covid__intro">Covid-19 sanitization</p>
            <h2 className="covid__title">
              We follow guidelines to keep you safe from the COVID-19 virus
            </h2>
            <p className="covid__text">
              Lobortis mattis odio leo eget mauris met aliquet semper molestie
              sollicitudin congue massa mauris lectus.
            </p>

            <div className="covid__contacts flex align-center">
              <Button text={"Get a free quote"} bgColor={"btn-primary"} />
              <div className="covid__contacts-call flex align-center">
                <img src="./images/tel.png" alt="tel icon" />
                <div className="covid__contacts-wrapper flex">
                  <span className="covid__contacts-text">Call us now</span>
                  <a
                    className="covid__contacts-link"
                    href="tel:(414) 567 - 2109"
                  >
                    (414) 567 - 2109
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="divider"></div>
      </div>
    </section>
  );
}

export default Covid;
