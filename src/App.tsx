import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { CategoryPage } from './pages/CategoryPage';
import { Newsletter } from './pages/Newsletter';
import { Changelog } from './pages/Changelog';
import { News } from './pages/News';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:category" element={<CategoryPage />} />
        <Route path="/newsletter" element={<Newsletter />} />
        <Route path="/changelog" element={<Changelog />} />
        <Route path="/news" element={<News />} />
      </Routes>
    </Router>
  );
}

export default App;