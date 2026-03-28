import React, { useState } from 'react';

export default function CommentSection() {
  const [comments, setComments] = useState([
    { name: "Sara B.", text: "Un endroit magnifique ! J'adore l'art sur les murs." },
    { name: "Youssef T.", text: "Le meilleur café de Tanger." }
  ]);
  const [newComment, setNewComment] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim() && name.trim()) {
      setComments([...comments, { name, text: newComment }]);
      setNewComment("");
      setName("");
    }
  };

  return (
    <div className="comment-section">
      <h3 style={{fontFamily: "var(--font-heading)", fontSize: "2rem", marginBottom: "2rem", color: "var(--primary)"}}>Laissez un commentaire</h3>
      <div className="comments-list">
        {comments.map((c, i) => (
          <div key={i} className="comment-card">
            <div className="comment-avatar">{c.name.charAt(0)}</div>
            <div>
              <strong>{c.name}</strong>
              <p>{c.text}</p>
            </div>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="comment-form">
        <h4>Ajouter un commentaire</h4>
        <input 
          type="text" 
          placeholder="Votre nom" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          required 
          className="form-input"
        />
        <textarea 
          placeholder="Votre message..." 
          value={newComment} 
          onChange={(e) => setNewComment(e.target.value)} 
          required
          className="form-input textarea"
        ></textarea>
        <button type="submit" className="btn">Publier</button>
      </form>
    </div>
  );
}
