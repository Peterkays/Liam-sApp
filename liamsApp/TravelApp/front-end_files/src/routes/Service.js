import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import ServiceImg from "../assets/wildLife.jpg";
import Trip from "../components/Trips";
import Footer from "../components/Footer";

function Service() {
  return (
    <>
      <Navbar />
      <Hero cName="hero-mid" heroImg={ServiceImg} title="What we Offer" />
      <Trip/>
      <Footer/>
    </>
  );
}
export default Service;
