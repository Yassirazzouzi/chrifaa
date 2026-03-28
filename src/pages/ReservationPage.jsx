import React, { useState, useEffect } from 'react';

export default function ReservationPage() {
  const daysInMonth = Array.from({length: 31}, (_, i) => i + 1);
  
  const [reservations, setReservations] = useState([]);
  const [newRes, setNewRes] = useState({ name: "", contact: "", date: "", time: "", guests: 2 });
  
  useEffect(() => {
    fetch('http://localhost:5000/api/reservations')
      .then(res => res.json())
      .then(data => setReservations(data))
      .catch(err => console.error("Error fetching reservations:", err));
  }, []);

  const handleReserve = async (e) => {
    e.preventDefault();
    if (newRes.date && newRes.name) {
      try {
        const response = await fetch('http://localhost:5000/api/reservations', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(newRes)
        });
        const savedRes = await response.json();
        setReservations([...reservations, savedRes]);
        alert("Demande de réservation envoyée pour " + newRes.name + " ! Nous vous contacterons pour confirmer.");
        setNewRes({ name: "", contact: "", date: "", time: "", guests: 2 });
      } catch (error) {
        console.error("Error booking:", error);
        alert("Erreur lors de la réservation.");
      }
    }
  };

  return (
    <div className="page-container" style={{minHeight: "100vh"}}>
      <div className="page-header">
        <h1>Réservations</h1>
        <p>Réservez votre table et consultez le calendrier des disponibilités</p>
      </div>
      
      <section className="section container">
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem'}}>
          
          {/* Formulaire de réservation */}
          <div className="comment-form" style={{ padding: '1.5rem', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', alignSelf: 'start' }}>
            <h3 style={{marginBottom: "2rem", fontSize: "1.5rem", color: 'var(--primary)'}}>Faire une réservation</h3>
            <form onSubmit={handleReserve} style={{display: 'flex', flexDirection: 'column', gap: '1.5rem'}}>
              
              <div style={{display: 'flex', gap: '1rem', flexWrap: 'wrap'}}>
                <div style={{flex: 1, minWidth: '200px'}}>
                  <label style={{display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: 'var(--text-secondary)'}}>Nom & Prénom</label>
                  <input type="text" className="form-input" value={newRes.name} onChange={e => setNewRes({...newRes, name: e.target.value})} required style={{marginBottom: 0}} placeholder="Ex: Dîner d'affaires" />
                </div>
                <div style={{flex: 1, minWidth: '200px'}}>
                  <label style={{display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: 'var(--text-secondary)'}}>Téléphone ou Email</label>
                  <input type="text" className="form-input" value={newRes.contact} onChange={e => setNewRes({...newRes, contact: e.target.value})} required style={{marginBottom: 0}} placeholder="Ex: 06... ou @gmail.com" />
                </div>
              </div>

              <div style={{display: 'flex', gap: '1rem', flexWrap: 'wrap'}}>
                <div style={{flex: 1, minWidth: '200px'}}>
                  <label style={{display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: 'var(--text-secondary)'}}>Date</label>
                  <input type="date" className="form-input" value={newRes.date} onChange={e => setNewRes({...newRes, date: e.target.value})} required style={{marginBottom: 0}} />
                </div>
                <div style={{flex: 1, minWidth: '200px'}}>
                  <label style={{display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: 'var(--text-secondary)'}}>Heure</label>
                  <input type="time" className="form-input" value={newRes.time} onChange={e => setNewRes({...newRes, time: e.target.value})} required style={{marginBottom: 0}} />
                </div>
              </div>

              <div>
                <label style={{display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: 'var(--text-secondary)'}}>Nombre de personnes</label>
                <input type="number" min="1" max="50" className="form-input" value={newRes.guests} onChange={e => setNewRes({...newRes, guests: e.target.value})} required style={{marginBottom: 0}} />
              </div>

              <button type="submit" className="btn" style={{marginTop: '1rem', width: '100%', fontSize: '1.1rem'}}>Confirmer la réservation</button>
            </form>
          </div>

          {/* Calendrier Visuel */}
          <div className="comment-form" style={{ padding: '1.5rem', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
            <h3 style={{marginBottom: "2rem", fontSize: "1.5rem", color: 'var(--primary)'}}>Calendrier des réservations</h3>
            
            <div style={{ overflowX: 'auto', paddingBottom: '1rem' }}>
              <div style={{ minWidth: '600px' }}>
                <div style={{display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '0.5rem', textAlign: 'center', marginBottom: '1rem', fontWeight: 'bold', color: 'var(--text-secondary)'}}>
                  <div>Lun</div><div>Mar</div><div>Mer</div><div>Jeu</div><div>Ven</div><div>Sam</div><div>Dim</div>
                </div>
                
                <div style={{display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '0.5rem'}}>
                  {/* Espaces vides pour décaler le 1er du mois (ex: commence un Mercredi) */}
                  <div style={{minHeight: '80px', padding: '0.5rem', border: '1px dashed #e0e0e0', borderRadius: '8px', opacity: 0.3}}></div>
                  <div style={{minHeight: '80px', padding: '0.5rem', border: '1px dashed #e0e0e0', borderRadius: '8px', opacity: 0.3}}></div>
                  
                  {daysInMonth.map(day => {
                    const dayReservations = reservations.filter(r => r.date === day);
                    const hasRes = dayReservations.length > 0;
                    
                    return (
                      <div key={day} style={{
                        minHeight: '80px', 
                        padding: '0.5rem', 
                        border: hasRes ? '2px solid var(--primary)' : '1px solid rgba(255, 255, 255, 0.5)', 
                        borderRadius: '8px', 
                        backgroundColor: hasRes ? 'rgba(212, 163, 89, 0.2)' : 'rgba(255, 255, 255, 0.4)', 
                        backdropFilter: 'blur(calc(var(--blur-val) / 2))',
                        display: 'flex', 
                        flexDirection: 'column',
                        transition: 'all 0.2s',
                        cursor: 'pointer'
                      }} title={hasRes ? dayReservations.map(r => `${r.time} - ${r.name}`).join('\n') : "Disponible"}>
                        <span style={{fontWeight: 'bold', alignSelf: 'flex-end', color: hasRes ? 'var(--primary)' : '#aaa'}}>{day}</span>
                        <div style={{flex: 1, marginTop: '0.5rem', display: 'flex', flexDirection: 'column', gap: '0.2rem', overflow: 'hidden'}}>
                          {dayReservations.slice(0, 2).map((r, i) => (
                            <div key={i} style={{fontSize: '0.65rem', backgroundColor: 'var(--primary)', color: 'white', padding: '2px 4px', borderRadius: '4px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}>
                              {r.time}
                            </div>
                          ))}
                          {dayReservations.length > 2 && (
                            <div style={{fontSize: '0.65rem', color: 'var(--primary)', textAlign: 'center', fontWeight: 'bold'}}>+{dayReservations.length - 2}</div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div style={{marginTop: '2rem', fontSize: '0.9rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
               <span style={{display: 'inline-block', width: '12px', height: '12px', backgroundColor: 'var(--primary)', borderRadius: '3px'}}></span> 
               <span>Jours avec réservations confirmées</span>
            </div>
          </div>
          
        </div>
      </section>
    </div>
  );
}
