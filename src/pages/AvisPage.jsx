import React, { useState, useEffect } from 'react';

export default function AvisPage() {
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({
    name: "",
    rating: 5,
    general: "",
    food: "",
    atmosphere: "",
    service: ""
  });

  useEffect(() => {
    fetch('http://localhost:5000/api/avis')
      .then(res => res.json())
      .then(data => setReviews(data))
      .catch(err => console.error("Error fetching reviews:", err));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/avis', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newReview)
      });
      const savedReview = await response.json();
      setReviews([savedReview, ...reviews]);
      setNewReview({ name: "", rating: 5, general: "", food: "", atmosphere: "", service: "" });
      alert("Merci pour votre avis complet !");
    } catch (error) {
      alert("Erreur lors de l'envoi de l'avis.");
    }
  };

  return (
    <div className="page-container" style={{minHeight: "100vh"}}>
      <div className="page-header">
        <h1>Livre d'Or & Avis</h1>
        <p>Partagez votre expérience détaillée avec nous</p>
      </div>
      
      <section className="section container">
        <div style={{display: 'flex', flexDirection: 'column', gap: '2rem'}}>
          
          <div className="comment-form" style={{maxWidth: '800px', margin: '0 auto', width: '100%', padding: '1.5rem', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)'}}>
            <h3 style={{marginBottom: "2rem", fontSize: "1.5rem", textAlign: "center", color: 'var(--primary)'}}>Rédiger un témoignage détaillé</h3>
            <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column', gap: '1.5rem'}}>
              
              <div style={{display: 'flex', gap: '1rem', flexWrap: 'wrap'}}>
                <div style={{flex: 2, minWidth: '200px'}}>
                  <label style={{display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: 'var(--text-secondary)'}}>Votre Nom</label>
                  <input type="text" className="form-input" value={newReview.name} onChange={e => setNewReview({...newReview, name: e.target.value})} required style={{marginBottom: 0}} />
                </div>
                <div style={{flex: 1, minWidth: '120px'}}>
                  <label style={{display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: 'var(--text-secondary)'}}>Note Globale</label>
                  <select className="form-input" value={newReview.rating} onChange={e => setNewReview({...newReview, rating: Number(e.target.value)})} style={{marginBottom: 0, cursor: 'pointer', backgroundColor: 'rgba(255, 255, 255, 0.8)'}}>
                    <option value={5}>⭐⭐⭐⭐⭐</option>
                    <option value={4}>⭐⭐⭐⭐</option>
                    <option value={3}>⭐⭐⭐</option>
                    <option value={2}>⭐⭐</option>
                    <option value={1}>⭐</option>
                  </select>
                </div>
              </div>

              <div>
                <label style={{display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: 'var(--text-secondary)'}}>Expérience Générale</label>
                <textarea placeholder="Comment s'est passée votre visite ?" className="form-input" style={{minHeight: '80px', resize: 'vertical', marginBottom: 0}} value={newReview.general} onChange={e => setNewReview({...newReview, general: e.target.value})} required></textarea>
              </div>

              <div>
                <label style={{display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: 'var(--text-secondary)'}}>Boissons & Nourriture (Optionnel)</label>
                <textarea placeholder="Qu'avez-vous pensé de notre menu ?" className="form-input" style={{minHeight: '80px', resize: 'vertical', marginBottom: 0}} value={newReview.food} onChange={e => setNewReview({...newReview, food: e.target.value})}></textarea>
              </div>

              <div>
                <label style={{display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: 'var(--text-secondary)'}}>Ambiance (Optionnel)</label>
                <textarea placeholder="L'atmosphère, la décoration, la musique ?" className="form-input" style={{minHeight: '80px', resize: 'vertical', marginBottom: 0}} value={newReview.atmosphere} onChange={e => setNewReview({...newReview, atmosphere: e.target.value})}></textarea>
              </div>

              <div>
                <label style={{display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: 'var(--text-secondary)'}}>Service (Optionnel)</label>
                <textarea placeholder="Le personnel, l'accueil, le temps d'attente ?" className="form-input" style={{minHeight: '80px', resize: 'vertical', marginBottom: 0}} value={newReview.service} onChange={e => setNewReview({...newReview, service: e.target.value})}></textarea>
              </div>

              <button type="submit" className="btn" style={{marginTop: '1rem', width: '100%', fontSize: '1.1rem'}}>Publier mon avis complet</button>
            </form>
          </div>

          <div style={{display: 'flex', flexDirection: 'column', gap: '2rem', maxWidth: '800px', margin: '0 auto', width: '100%'}}>
            <h2 className="section-title" style={{marginBottom: '1rem'}}>Avis Détériorés</h2>
            {reviews.map((r, i) => (
              <div key={i} className="comment-card" style={{flexDirection: 'column', gap: '0', padding: '2rem', borderLeft: '4px solid var(--primary)', borderRadius: '15px' }}>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', borderBottom: '1px solid #eee', paddingBottom: '1rem'}}>
                  <strong style={{fontSize: '1.3rem', color: 'var(--primary)', fontFamily: 'var(--font-heading)'}}>{r.name}</strong>
                  <div className="stars" style={{margin: 0, letterSpacing: '2px'}}>{"★".repeat(r.rating)}{"☆".repeat(5-r.rating)}</div>
                </div>
                
                <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem'}}>
                  {r.general && (
                    <div style={{gridColumn: '1 / -1'}}>
                      <h4 style={{color: 'var(--text-secondary)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.5rem'}}>Expérience Globale</h4>
                      <p style={{fontStyle: 'italic', fontSize: '1.1rem', color: '#444'}}>"{r.general}"</p>
                    </div>
                  )}
                  {r.food && (
                    <div style={{backgroundColor: 'rgba(212, 163, 89, 0.1)', padding: '1.5rem', borderRadius: '10px'}}>
                      <h4 style={{color: 'var(--text-secondary)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.5rem'}}>Boissons & Nourriture</h4>
                      <p style={{fontSize: '0.95rem'}}>{r.food}</p>
                    </div>
                  )}
                  {r.atmosphere && (
                    <div style={{backgroundColor: 'rgba(212, 163, 89, 0.1)', padding: '1.5rem', borderRadius: '10px'}}>
                      <h4 style={{color: 'var(--text-secondary)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.5rem'}}>Ambiance</h4>
                      <p style={{fontSize: '0.95rem'}}>{r.atmosphere}</p>
                    </div>
                  )}
                  {r.service && (
                    <div style={{backgroundColor: 'rgba(212, 163, 89, 0.1)', padding: '1.5rem', borderRadius: '10px'}}>
                      <h4 style={{color: 'var(--text-secondary)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.5rem'}}>Service</h4>
                      <p style={{fontSize: '0.95rem'}}>{r.service}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </section>
    </div>
  );
}
