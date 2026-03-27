import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import MenuPage from './pages/MenuPage';
import GalleryPage from './pages/GalleryPage';
import EventsPage from './pages/EventsPage';
import AvisPage from './pages/AvisPage';
import ReservationPage from './pages/ReservationPage';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/galerie" element={<GalleryPage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/avis" element={<AvisPage />} />
            <Route path="/reservations" element={<ReservationPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
