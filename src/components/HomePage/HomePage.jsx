// src/components/HomePage.jsx

import React, { useState } from "react";
import "./HomePage.css";

function HomePage({ onSend }) {
  const [artist, setArtist] = useState("");
  const [song, setSong] = useState("");

  const handleSubmit = () => {
    onSend({ artist, song });
  };

  return (
    <div className="home-container">
      <input
        type="text"
        placeholder="Artiste"
        value={artist}
        onChange={(e) => setArtist(e.target.value)}
        className="input-field"
      />
      <input
        type="text"
        placeholder="Chanson"
        value={song}
        onChange={(e) => setSong(e.target.value)}
        className="input-field"
      />
      <button onClick={handleSubmit} className="send-button">
        Envoyer
      </button>
    </div>
  );
}

export default HomePage;
