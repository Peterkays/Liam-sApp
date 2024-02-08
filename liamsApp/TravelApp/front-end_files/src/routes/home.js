import Destination from "../components/Destination";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Trip from "../components/Trips";
import Footer from "../components/Footer";
function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg="https://media.istockphoto.com/id/1237462133/photo/victoria-falls.jpg?s=612x612&w=0&k=20&c=CkNgjOmmo9zxD8ytPQ_hiPR2HWqBkzNqNdNPh3vrtf4="
        title="Your Journey Your Story"
        text="Choose Your Destination"
        buttonText="Travel Plan"
        url="/"
        btnClass="show"
      />
      <Destination />
      <Trip/>
      <Footer/>
    </>
  );
}
export default Home;
