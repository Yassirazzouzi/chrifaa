import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {

  // Testimonials State
  const [testimonials, setTestimonials] = useState([
    { name: "Ahmed", rating: 5, text: "Un endroit magique ! Le café est délicieux et l'ambiance est incroyablement inspirante avec toutes ces œuvres d'art." },
    { name: "Sarah", rating: 5, text: "Le meilleur endroit pour se détendre à Tanger. Le thé à la menthe est authentique et le personnel est très accueillant." },
    { name: "Karim", rating: 4, text: "Très beau café avec une décoration unique. Les pâtisseries marocaines sont à tomber par terre !" }
  ]);



  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <img src="/hero.png" alt="Cafe Background" className="hero-bg" />
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">Where Art<br /> &Culture Converge<br /></h1>
          <Link to="/menu" className="btn">Notre Menu</Link>
        </div>
      </section>

      {/* Menu Section Intégrée */}
      <section className="section container">
        <h2 className="section-title">Notre Menu</h2>
        <p style={{ textAlign: "center", marginBottom: "3rem", color: "var(--text-secondary)" }}>Découvrez un aperçu de nos boissons et collations.</p>
        <div className="menu-grid">
          <div className="menu-card" style={{ backgroundImage: "url('/about.png')", backgroundSize: "cover", backgroundPosition: "center", position: "relative", zIndex: 1 }}>
            <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", backgroundColor: "rgba(255,255,255,0.6)", backdropFilter: "blur(var(--blur-val))", zIndex: -1, borderRadius: "20px" }}></div>
            <div className="stars">★★★★★</div>
            <div className="menu-list-container">
              <div className="menu-category">
                <h3>Boissons</h3>
                <ul className="menu-list">
                  <li>Café Spécialité - 25 DH</li>
                  <li>Thé Marocain à la Menthe - 15 DH</li>
                  <li>Jus d'Orange Frais - 20 DH</li>
                </ul>
              </div>
              <div className="menu-category">
                <h3>Snacks & Pâtisseries</h3>
                <ul className="menu-list">
                  <li>Assortiment Pâtisseries - 40 DH</li>
                  <li>Cheesecake au Citron - 35 DH</li>
                  <li>Toast Avocat & Œuf - 45 DH</li>
                </ul>
              </div>
            </div>
            <div style={{ textAlign: "center", marginTop: "1.5rem" }}>
              <Link to="/menu" className="btn">Voir le menu complet</Link>
            </div>
          </div>
          <div className="menu-card-image">
            <img src="/menu.png" alt="Aperçu Menu" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section container">
        <div className="about">
          <div className="about-image">
            <img src="/about.png" alt="Femme dans le café" />
          </div>
          <div className="about-content">
            <h2>A Propos</h2>
            <p>
              Situé au cœur de la ville vibrante de Tanger, Coffee Cultural Cherifa est un café
              artistique et emblématique. Nous vous invitons à découvrir un espace unique décoré d'œuvres
              d'art murales et à savourer votre café ou thé dans une ambiance chaleureuse et inspirante.
            </p>
            <Link to="/galerie" className="btn">En savoir plus</Link>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="section container">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem", textAlign: "center" }}>
          <div className="card-link">
            <h3>Notre Galerie</h3>
            <p>Découvrez notre espace unique.</p>
            <Link to="/galerie" className="btn">Voir la galerie</Link>
          </div>
          <div className="card-link">
            <h3>Nos Événements</h3>
            <p>Participez à nos soirées culturelles.</p>
            <Link to="/events" className="btn">Voir les événements</Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section container">
        <h2 className="section-title">Témoignages</h2>
        <p style={{ textAlign: "center", marginBottom: "3rem", color: "var(--text-secondary)" }}>Ce que disent nos clients</p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
          <div className="testimonials-grid">
            {testimonials.map((t, i) => (
              <div key={i} className="testimonial-card">
                <div className="stars">{"★".repeat(t.rating)}{"☆".repeat(5 - t.rating)}</div>
                <p>"{t.text}"</p>
                <strong style={{ display: 'block', marginTop: '1rem', color: 'var(--primary)' }}>- {t.name}</strong>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '1rem' }}>
            <Link to="/avis" className="btn" style={{ fontSize: '1.1rem', padding: '1rem 2.5rem', borderRadius: '9999px', boxShadow: '0 4px 15px rgba(212, 163, 89, 0.3)' }}>
              Voir tous les avis & Ajouter le vôtre
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section container">
        <h2 className="section-title">Contact</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem", alignItems: "start" }}>
          <div>
            <h3 style={{ fontSize: "1.8rem", marginBottom: "1.5rem" }}>Informations</h3>
            <p style={{ color: "var(--text-secondary)", marginBottom: "2rem" }}>
              N'hésitez pas à nous contacter pour toute question, réservation de groupe ou événement privé. Notre équipe sera ravie de vous répondre !
            </p>
            <div style={{ marginBottom: "1rem" }}>
              <strong>📍 Adresse: </strong> 12 Rue de la Liberté, Tanger
            </div>
            <div style={{ marginBottom: "1rem" }}>
              <strong>📞 Téléphone: </strong> +212 5 39 98 00 00
            </div>
            <div style={{ marginBottom: "2rem" }}>
              <strong>✉️ Email: </strong> contact@cafecherifa.ma
            </div>
            <div style={{ marginBottom: "2rem" }}>
              <strong>🕒 Horaires: </strong> Ouvert tous les jours de 08:00 à 23:00
            </div>

            {/* Map Embed */}
            <div style={{ marginTop: "2rem", borderRadius: "15px", overflow: "hidden", height: "250px", boxShadow: "0 5px 15px rgba(0,0,0,0.1)" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3235.808!2d-5.811!3d35.789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd0b42f!2sTangier!5e0!3m2!1sen!2sma!4v1700000000000!5m2!1sen!2sma"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
          </div>

          <div className="comment-form">
            <h4 style={{ marginBottom: "1.5rem", fontSize: "1.2rem" }}>Envoyez-nous un message</h4>
            <form onSubmit={async (e) => {
              e.preventDefault();
              try {
                await fetch('http://localhost:5000/api/contact', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({
                    name: e.target[0].value,
                    email: e.target[1].value,
                    message: e.target[2].value
                  })
                });
                alert("Message reçu par notre équipe !");
                e.target.reset();
              } catch (err) {
                alert("Erreur de connexion au serveur !");
              }
            }}>
              <input type="text" placeholder="Votre Nom" className="form-input" required />
              <input type="email" placeholder="Votre Email" className="form-input" required />
              <textarea placeholder="Votre Message" className="form-input textarea" required></textarea>
              <button type="submit" className="btn" style={{ width: '100%' }}>Envoyer le message</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
