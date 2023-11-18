import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Movies from './pages/Movies';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movies" element={<Movies />} />
      {/* Add routes later */}
    </Routes>
    <Footer />
  </Router>
);

export default App;
