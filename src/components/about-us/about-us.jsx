import AboutCards from "../about-card/about-card";
import Button from "../button/button";
import "./about-us.css";

function AboutUs() {
  return (
    <div id="about-us">
      <div className="container">
        <div className="about__into">
          <h2 className="about__title">About Us</h2>
          <p className="about__text">
            Sagittis nibh scelerisque vitae eget vulputate sem elementum sed
            neque nisi felis non ultrices massa id egestas quam velit pretium
            nu.
          </p>
        </div>

        <AboutCards />

        <div className="about__register">
          <Button text={"Get a free quote"} bgColor={"btn-primary"} />
          <Button text={"Explore services"} bgColor={"btn-light"} />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
