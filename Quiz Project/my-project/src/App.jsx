import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./Context/CartContext.jsx";

// Pages
import Home from "./Pages/Home.jsx";
import Menu from "./Pages/Menu.jsx";
import About from "./Pages/About.jsx";
import Contact from "./Pages/Contact.jsx";

// Components
import AboutSection from "./Components/AboutSection.jsx";
import ServicesCategory from "./Components/ServicesCategory.jsx";
import Specialities from "./Components/Specialities.jsx";
import Chef from "./Components/Chef.jsx";
import Testimonials from "./Components/Testimonials.jsx";
import Footer from "./Components/Footer.jsx";
import Navbar from "./Components/Navbar.jsx";
import SideCart from "./Components/SideCart.jsx";
import Blog from "./Components/Blog.jsx";

export default function App() {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <SideCart />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                <AboutSection />
                <ServicesCategory />
                <Specialities />
                <Chef />
                <Testimonials />
                <Blog />
              </>
            }
          />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/blog" element={<Blog />} /> */}
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  );
}
