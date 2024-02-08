import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg from "../assets/the-great-zimbabwe-ruins-outside-masvingo-in-zimbabwe.jpg";
import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";

function About() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={AboutImg}
        title="About us"
        btnClass="hide"
      />
      <AboutUs />
      <Footer />
    </>
  );
}
export default About;
