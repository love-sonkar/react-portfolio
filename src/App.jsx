import Header from "./components/Header";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";
import "react-lazy-load-image-component/src/effects/blur.css";
import ScrollTopComponent from "./components/utility/ScrollTopComponent";

function App() {
  return (
    <div className="bg-slate-100  h-screen flex flex-col items-center justify-between ">
      <Toaster />
      <ScrollTopComponent />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
