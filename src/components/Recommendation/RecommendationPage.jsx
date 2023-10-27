// src/components/RecommendationPage.jsx

import React from "react";
import "./RecommendationPage.css";

function RecommendationPage({ recommendations, parentOnClick }) {
  const [justLoaded, setJustLoaded] = React.useState(false);

  React.useEffect(() => { // just animation purposes
    setTimeout(() => {
      setJustLoaded(true);
    }
    , 100)
  }, [])

  return (
    <div className="container">
      <div className="animation-container" style={{opacity: justLoaded ? '100%' : '0%'}}>
        <button className="back-button" onMouseUp={parentOnClick}>
          <a className="back-title">Take me back to home page</a>
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
    </div>
  );
}

export default RecommendationPage;
