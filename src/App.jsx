// src/App.jsx

import React, { useState } from "react";
import "./App.css";
import HomePage from "./components/HomePage/HomePage";
import RecommendationPage from "./components/Recommendation/RecommendationPage";
import { IsHomeProvider } from "./contexts/IsHomeContext";

function App() {
  const [recommendations, setRecommendations] = useState([]);

  const handleAPICall = (data) => {
    // Simulez des données recommandées
    const simulatedRecommendations = [
      { artistName: "Becky G", songName: "Arranca (feat. Omega)" },
      { artistName: "Sound Of Legend", songName: "God is a Girl" },
      { artistName: "Dua Lipa", songName: "Dance The Night" },
      { artistName: "Loreen", songName: "Tattoo" },
      { artistName: "Calema", songName: "A Nossa Dança" },
      { artistName: "Loi", songName: "Gold" },
      { artistName: "Maluma", songName: "COCO LOCO" },
      { artistName: "Marnik, Naeleck & VINAI", songName: "Boyz In Paris" },
      { artistName: "Calvin Harris & Sam Smith", songName: "Desire" },
      { artistName: "Doja Cat", songName: "Paint The Town Red" },
    ];
    setRecommendations(simulatedRecommendations);
  };

  return (
    <IsHomeProvider>
      <div className="app-container">
        <HomePage parentOnClick={handleAPICall} />
      </div>
    </IsHomeProvider>
  );
}

export default App;
