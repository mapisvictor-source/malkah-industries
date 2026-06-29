import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhyMalkah from "./components/WhyMalkah";
import Products from "./components/Products";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <WhyMalkah />
      <Products />
      <Footer />
    </div>
  );
}