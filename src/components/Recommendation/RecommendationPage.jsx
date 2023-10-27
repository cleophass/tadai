// src/components/RecommendationPage.jsx

import React from "react";
import "./RecommendationPage.css";
import { BiShare } from "react-icons/bi";

function RecommendationPage({ parentSong, parentArtist, recommendations, parentOnClick }) {
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
        <div className='title-container-rec'>
          <div className='title-rec'>RECOMMENDATIONS FROM</div>
          <div className='subtitle-rec'>{parentSong} by {parentArtist}</div>
        </div>
        <table className="recommendation-table">
          <thead>
            <tr>
              <th>SONG</th>
              <th>ARTIST</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {recommendations.map((rec, index) => (
              <tr key={index} className="recommendation-row">
                <td>{rec.songName}</td>
                <td>{rec.artistName}</td>
                <td className='row-action-icon'>
                  <BiShare className="share-icon" size={17}/>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default RecommendationPage;
