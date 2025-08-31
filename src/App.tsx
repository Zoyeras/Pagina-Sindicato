import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import About from "./components/About";
import News from "./components/News";
import Membership from "./components/Membership";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-gray-50 text-gray-800">
      <Header />
      <Hero />
      <Features />
      <About />
      <News />
      <Membership />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
