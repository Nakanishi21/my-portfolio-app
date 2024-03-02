import React from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import { SamplePage2 } from './pages/SamplePage';
import { Routes, Route } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SamplePage2" element={<SamplePage2 />} />
      </Routes>
    </div>
  );
};

export default App;