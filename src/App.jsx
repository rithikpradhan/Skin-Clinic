import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import TrustBar from "./components/TrustBar";
import Treatments from "./components/Treatments";
import Services from "./components/Services";
import BeforeAfter from "./components/BeforeAfter";
import AboutTeam from "./components/AboutTeam";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingBookingButton from "./components/FloatingBookingButton";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <TrustBar />
      <Treatments />
      <Services />
      <BeforeAfter />
      <AboutTeam />
      <Contact />
      <Footer />
      <FloatingBookingButton />
    </div>
  );
}

export default App;
