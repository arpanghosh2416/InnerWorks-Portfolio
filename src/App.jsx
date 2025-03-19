import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import Slider from "./components/about/Slider";
import Services from "./components/services/Services";
import Teams from "./components/about/Team";

export default function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Services />
      <Teams />
      <Slider />
    </>
  );
}
