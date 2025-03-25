import "./App.css";
// import Navbar from "./components/navbar/Navbar";
import Navheader from "./components/header/Header";
import Slider from "./components/about/Slider";
import Services from "./components/services/Services";
import Teams from "./components/about/Team";
import { Footer } from "./components";

import Testimonials from "./components/extra/Testimonials";
export default function App() {
  return (
    <>
        {/* <Navbar /> */}
        <Navheader />
        <Services />
        <Teams />
        <Slider />
        <Testimonials />
        <Footer />
    </>
  );
}
