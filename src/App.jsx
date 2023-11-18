import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Movies from './pages/Movies';
import Shows from './pages/Shows';
import Actors from './pages/Actors';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/shows" element={<Shows />} />
      <Route path="/actors" element={<Actors />} />
    </Routes>
    <Footer />
  </Router>
);

export default App;
