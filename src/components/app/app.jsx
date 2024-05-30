import AboutUs from "../about-us/about-us";
import Articles from "../articles/articles";
import Contacts from "../contacts/contacts";
import Covid from "../covid/covid";
import Footer from "../footer/footer";
import Navbar from "../navbar/navbar";
import OurServices from "../our-services/our-services";
import Showcase from "../showcase/showcase";
import "./app.css";

function App() {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Showcase */}
      <Showcase />

      {/* About Us */}
      <AboutUs />

      {/* Our Services */}
      <OurServices />

      {/* Covid */}
      <Covid />

      {/* Articles */}
      <Articles />

      {/* Contacts */}
      <Contacts />

      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;
