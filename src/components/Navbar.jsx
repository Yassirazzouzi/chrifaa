import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Simple placeholder icons
const MenuIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>;
const XIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>;

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''} ${isOpen ? 'menu-open' : ''}`}>
      <nav className="navbar container">
        <Link to="/" className="nav-logo">Café Cherifa</Link>
        <div className={`nav-links ${isOpen ? 'open' : ''}`}>
          <Link to="/" onClick={() => setIsOpen(false)}>Accueil</Link>
          <Link to="/menu" onClick={() => setIsOpen(false)}>Menu</Link>
          <Link to="/galerie" onClick={() => setIsOpen(false)}>Galerie</Link>
          <Link to="/events" onClick={() => setIsOpen(false)}>Événements</Link>
          <Link to="/reservations" onClick={() => setIsOpen(false)}>Réservations</Link>
          <Link to="/avis" onClick={() => setIsOpen(false)}>Avis</Link>
        </div>
        <button className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <XIcon /> : <MenuIcon />}
        </button>
      </nav>
    </header>
  );
}
