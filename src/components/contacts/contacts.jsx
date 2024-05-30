import Button from "../button/button";
import "./contacts.css";

function Contacts() {
  return (
    <section id="contacts">
      <div className="container">
        <div className="wrapper flex justify-between align-center">
          <div className="contacts__content">
            <h2 className="contacts__title">Contact Us</h2>
            <p className="contacts__text">
              In dignissim euismod pretium amet enim a eu nam ut urna accumsan
              pellentesque lacus duis pharetra eutortor.
            </p>
            <div className="contacts__tel flex align-center">
              <img src="./images/tel.png" alt="tel icon" />
              <div className="contacts__call-content flex">
                <span className="contacts__call-text">Call us now</span>
                <a className="contacts-call-link" href="tel:(414) 567 - 2109">
                  (414) 567 - 2109
                </a>
              </div>
            </div>
            <h3 className="contacts__convinced-title">Not convinced yet?</h3>
            <p className="contacts__convinced-text">
              Massa bibendum consectetur maurisid gravida purus, dolor dui amet
              morbi non nunc urna purus diam.
            </p>
            <Button text={"Browse our packages"} bgColor={"btn-light"} />
          </div>

          <form id="contacts__form">
            <div className="contacts__section">
              <div className="full__name">
                <label htmlFor="fullName">Full Name</label>
                <input type="text" required name="Full name:" id="fullName" />
              </div>
              <div className="phone__number">
                <label htmlFor="phoneNumber">Phone number</label>
                <input
                  type="number"
                  required
                  name="Phone number:"
                  id="phoneNumber"
                />
              </div>
            </div>
            <div className="contacts__section">
              <div className="address">
                <label htmlFor="address">Address</label>
                <input type="text" required name="Address:" id="address" />
              </div>
              <div className="email">
                <label htmlFor="email">Email</label>
                <input type="email" required name="Email:" id="email" />
              </div>
            </div>
            <div className="contacts__section">
              <div className="requested__service">
                <label htmlFor="requestedService">Requested service</label>
                <input
                  type="text"
                  required
                  name="Requested service:"
                  id="requestedService"
                />
              </div>
              <div className="day__of-service">
                <label htmlFor="dayOfService">Day of service</label>
                <input
                  type="text"
                  required
                  name="Day of service:"
                  id="dayOfService"
                />
              </div>
            </div>
            <div className="add__note">
              <label htmlFor="addNote">Add a note</label>
              <textarea name="Add a note:" id="addNote" required></textarea>
            </div>

            <div className="contacts__form-submit">
              <Button text={"Submit message"} bgColor={"btn-primary"} />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contacts;
