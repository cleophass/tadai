// src/components/PageSelector

import React, { useState } from "react";
import "./PageSelector.css";
import HomePage from "../HomePage/HomePage"
import RecommendationPage from "../Recommendation/RecommendationPage";
import { useIsHome, useIsHomeUpdate } from "../../contexts/IsHomeContext";

const PageSelector = () => {
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
    const [showHome, setShowHome] = useState(true);
    const [artist, setArtist] = useState("");
    const [song, setSong] = useState("");

    const homePage = useIsHome();
    const toggleHomePage = useIsHomeUpdate();


    // TODO: replace this with API call but keep the nested timeout for animation
    const handleAPICall = () => {
        setTimeout(() => {
            toggleHomePage();
            console.log('API responded')

            // keep this for animation
            setTimeout(() => {
                setShowHome(false);
            }, 1600)
        }, 2000);
    };

    const handleBackToHome = () => {
        toggleHomePage();
        setShowHome(true);
    }

    React.useEffect(() => {console.log(homePage)}, [homePage]) // debug

    return (
        <div className="container">
            {
                showHome ?
                <div className="home-container" style={{transform: homePage ? 'translateY(0)' : 'translateY(-100vh)', opacity: homePage ? '100%' : '0%'}}>
                    <HomePage parentOnClick={handleAPICall} parentSetSong={setSong} parentSetArtist={setArtist}/>
                </div>
                :
                <div>
                    <RecommendationPage parentSong={song} parentArtist={artist} recommendations={simulatedRecommendations} parentOnClick={handleBackToHome} />
                </div>
            }
        </div>
    );
}

export default PageSelector;