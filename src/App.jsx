import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import Slider from "./components/about/Slider";
import Services from "./components/services/Services";
import Teams from "./components/about/Team";
import { Footer } from "./components";
import ComingSoon from "./components/extra/Comingsoon";
import Testimonials from "./components/extra/Testimonials";
export default function App() {
  return (
    <>
      {/* Mobile Warning - Shown only on Mobile */}
      <div id="mobile-warning">
        This website is designed for desktop. <br /> Please open it on a larger screen.
        <br/>Mobile Version coming Soon.🎉
      </div>

      {/* Full Website - Hidden on Mobile */}
      <div id="desktop-content">
        <Navbar />
        <ComingSoon />
        <Header />
        <Services />
        <Teams />
        <Slider />
        <Testimonials />
        <Footer />

      </div>
    </>
  );
}
