import Button from "../button/button";
import "./our-sercices.css";
import ServicesCards from "./services-cards";

function OurServices() {
  return (
    <section id="our-services">
      <div className="container">
        <div className="services__intro flex justify-between align-center">
          <h2 className="services__title">Our Services</h2>
          <Button text={"Explore services"} bgColor={"btn-light"} />
        </div>

        <ServicesCards />
      </div>
    </section>
  );
}

export default OurServices;
