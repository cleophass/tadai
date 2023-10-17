// src/components/RecommendationPage.jsx

import React from "react";
import "./RecommendationPage.css";

function RecommendationPage({ recommendations, onBack }) {
  return (
    <div className="recommendation-container">
      <button onClick={onBack} className="back-button">
        Retour
      </button>
      <table className="recommendation-table">
        <thead>
          <tr>
            <th>Artiste</th>
            <th>Titre</th>
          </tr>
        </thead>
        <tbody>
          {recommendations.map((rec, index) => (
            <tr key={index}>
              <td>{rec.artistName}</td>
              <td>{rec.songName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RecommendationPage;
