import React from 'react';

export default function GalleryPage() {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Galerie</h1>
        <p>Découvrez l'Univers de Notre Café en Images</p>
      </div>
      
      <section className="section container">
        <div className="gallery-grid-large">
          <div className="gallery-item-large"><img src="/hero.png" alt="Vue Extérieure" /></div>
          <div className="gallery-item-large"><img src="/about.png" alt="Intérieur Artistique" /></div>
          <div className="gallery-item-large"><img src="/menu.png" alt="Pâtisseries et Thé" /></div>
          <div className="gallery-item-large"><img src="/hero.png" alt="Vue Panoramique" /></div>
          <div className="gallery-item-large"><img src="/about.png" alt="Décoration Murale" /></div>
          <div className="gallery-item-large"><img src="/menu.png" alt="Ambiance Chaleureuse" /></div>
        </div>
      </section>
    </div>
  );
}
