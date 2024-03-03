import React from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import Products from './pages/Products';
import About from './pages/About';
import Career from './pages/Career';

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Career" element={<Career />} />
        <Route path="/Products" element={<Products />} />
        
      </Routes>
    </div>
  );
};

export default App;