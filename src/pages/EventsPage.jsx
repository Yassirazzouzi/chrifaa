import React from 'react';
import CommentSection from '../components/CommentSection';

export default function EventsPage() {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Événements</h1>
        <p>Soirées Culturelles, Musique Live et Expositions d'Art</p>
      </div>
      
      <section className="section container">
        <div className="events-list">
          <div className="event-card">
            <div className="event-date">
              <span className="day">15</span>
              <span className="month">AVR</span>
            </div>
            <div className="event-details">
              <h2>Soirée Musique Gnawa</h2>
              <p className="event-time">20:00 - 23:00</p>
              <p>Rejoignez-nous pour une soirée envoûtante avec un groupe local de Gnaoua. Entrée libre, réservation conseillée.</p>
            </div>
          </div>
          
          <div className="event-card">
            <div className="event-date">
              <span className="day">22</span>
              <span className="month">AVR</span>
            </div>
            <div className="event-details">
              <h2>Vernissage : Couleurs Bleues</h2>
              <p className="event-time">18:00 - 21:00</p>
              <p>Exposition des nouvelles toiles de l'artiste peintre local. Discussions et thé offerts.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Adding Comment Section on the Events page as requested */}
      <section className="section container">
        <CommentSection />
      </section>
    </div>
  );
}
