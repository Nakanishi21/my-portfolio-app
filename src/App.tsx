import React from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import Products from './pages/Products';
import About from './pages/About';
import Career from './pages/Career';
import { Container } from '@mui/material';

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <Container maxWidth="md" sx={{ mt: 4 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Career" element={<Career />} />
          <Route path="/Products" element={<Products />} />
        </Routes>
      </Container>
      
    </div>
  );
};

export default App;