import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home'
import Contact from './components/Contact';
import Navbar from './components/NavBar';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route  exact path="/" element={<Home />}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/projects" element={<Projects/>}></Route>
        <Route path="/skills" element={<Skills/>}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/navbar" element={<Navbar />}></Route>
        <Route path="/testimonial" element={<Testimonials />}></Route>
        <Route path="/footer" element={<Footer />}></Route>
      </Routes>
      {/* <Projects/> */}
      {/* <Footer/> */}
    </Router>
  )
}

export default App
