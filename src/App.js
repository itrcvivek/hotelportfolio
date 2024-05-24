import React from 'react'
import Pricing from './components/pages/pricing/price'
import Footer from './components/Inc/footer'
import ContactUs from './components/pages/contact/contact'
import AboutUs from './components/pages/About/aboutUs'
import Home from './components/Home/Home'
import Navigation from './components/Inc/navbar'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css"

const App = () => {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Pricing" element={<Pricing />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/ContactUs" element={<ContactUs />} />
      </Routes>
      <Footer />
    </Router>

  )
}

export default App