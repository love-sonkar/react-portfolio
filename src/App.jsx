import Header from "./components/Header";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-slate-100  h-auto">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
