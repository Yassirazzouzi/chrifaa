import React from 'react';

export default function MenuPage() {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Notre Menu</h1>
        <p>Découvrez nos boissons et collations authentiques</p>
      </div>
      
      <section className="section container">
        <div className="menu-grid">
          <div className="menu-card" style={{backgroundImage: "url('/about.png')", backgroundSize: "cover", backgroundPosition: "center", position: "relative", zIndex: 1}}>
            <div style={{position: "absolute", top: 0, left: 0, width: "100%", height: "100%", backgroundColor: "rgba(255,255,255,0.9)", zIndex: -1, borderRadius: "20px"}}></div>
            <div className="stars">★★★★★</div>
            <div className="menu-list-container">
              <div className="menu-category">
                <h3>Boissons Chaudes</h3>
                <ul className="menu-list">
                  <li>Café Spécialité - 25 DH</li>
                  <li>Thé Marocain à la Menthe - 15 DH</li>
                  <li>Chocolat Chaud Maison - 30 DH</li>
                  <li>Café au Lait - 20 DH</li>
                  <li>Espresso Caramel - 25 DH</li>
                </ul>
              </div>
              <div className="menu-category">
                <h3>Boissons Froides</h3>
                <ul className="menu-list">
                  <li>Jus d'Orange Frais - 20 DH</li>
                  <li>Thé Glacé Pêche - 25 DH</li>
                  <li>Smoothie Fruits Rouges - 35 DH</li>
                  <li>Limonade Maison - 20 DH</li>
                </ul>
              </div>
            </div>
            <div className="menu-list-container">
              <div className="menu-category">
                <h3>Snacks & Pâtisseries</h3>
                <ul className="menu-list">
                  <li>Assortiment Pâtisseries Marocaines - 40 DH</li>
                  <li>Cheesecake au Citron - 35 DH</li>
                  <li>Brownie aux Noix - 30 DH</li>
                  <li>Toast Avocat & Œuf - 45 DH</li>
                  <li>Salade Fraîcheur - 50 DH</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="menu-card-image">
            <img src="/menu.png" alt="Menu Pastries" />
          </div>
        </div>
      </section>
    </div>
  );
}
