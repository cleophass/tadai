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
    const [formattedRecommendations, setFormattedRecommendations] = useState(simulatedRecommendations);
    const [showHome, setShowHome] = useState(true);
    const [artist, setArtist] = useState("");
    const [song, setSong] = useState("");

    const homePage = useIsHome();
    const toggleHomePage = useIsHomeUpdate();


    const handleAPICall = () => {

        const maxTimeout = 350000;
        console.log('API call started. With following parameters: ');
        console.log('Song: ', song);
        console.log('Artist: ', artist);

        const numberOfRecommendations = 10; // Replace with your desired number of recommendations
        const apiUrl = `https://13.38.95.183/predict?title=${encodeURIComponent(song)}&artist=${encodeURIComponent(artist)}&nb_of_recommendations=${numberOfRecommendations}`;


        const apiCallPromise = fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                // Check if the API response contains data
                if (data && data.data) {
                    // Parse the data field, which is a string of JSON
                    const recommendations = JSON.parse(data.data);

                    // Format the recommendations to match your desired structure
                    const formattedRecommendations = recommendations.map(item => ({
                        artistName: item.Artist,
                        songName: item.Name,
                    }));

                    // Now, you can use formattedRecommendations for rendering
                    console.log('Formatted Recommendations:', formattedRecommendations);
                    setFormattedRecommendations(formattedRecommendations);
                    // Render the recommendations or update your component state here
                } else {
                    console.error('API response does not contain data field.');
                }
            })
            .catch(error => {
                console.error('Error fetching data from the API:', error);
            });
        
        const TimeoutPromise = new Promise((resolve, reject) => {
            setTimeout(() => {
                reject('Request timed out the query is more than 35 seconds');
            }, maxTimeout);
        });

        Promise.race([apiCallPromise, TimeoutPromise])
            .finally(() => {
                // This will always run, regardless of the result
                console.log('API call completed.');
                toggleHomePage();
                setTimeout(() => {
                    setShowHome(false);
                }, 1600)
            });

        // keep this for animation
        // setTimeout(() => {
        //     toggleHomePage();
        //     console.log('API will respond in any moment...')

        //     // keep this for animation
        //     setTimeout(() => {
        //         setShowHome(false);
        //     }, 1600)
        // }, 2000);
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
                    <RecommendationPage parentSong={song} parentArtist={artist} recommendations={formattedRecommendations} parentOnClick={handleBackToHome} />
                </div>
            }
        </div>
    );
}

export default PageSelector;