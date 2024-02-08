import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import ContactImg from "../assets/gZimAreaView.jpg";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

function Contacts() {
  return (
    <>
      <Navbar />
      <Hero cName="hero" heroImg={ContactImg} title="How to get in touch" />
      <ContactForm />
      <Footer />
    </>
  );
}
export default Contacts;
