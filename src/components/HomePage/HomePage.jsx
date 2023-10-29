// src/components/HomePage.jsx

import React from 'react';
import './HomePage.css';
import TextInput from '../TextInput/TextInput';
import ButtonSubmit from '../ButtonSubmit/ButtonSubmit';

function HomePage({ parentOnClick, parentSetSong, parentSetArtist }) {
  const handleSubmit = () => {
    parentOnClick(); 
  };

  return (
    <div className='home-container'>
      <img className='img-background' src='https://wallup.net/wp-content/uploads/2018/03/19/552659-Sergey_Zabelin-digital_art-nature-landscape-hills-clouds-mountains-snowy_peak-night-stars-rock-church-villages-valley-plants-fantasy_art.jpg'/>
      <div className='brand'>TADAI</div>
      <div className='content'>
        <div className='title-container'>
          <div className='title'>Be adventurous</div>
          <div className='subtitle'>Discover your new favorite songs</div>
        </div>
        <div className='form-container'>
          <TextInput setState={parentSetSong} placeholder={'Enter a song name'}/>
          <TextInput setState={parentSetArtist} placeholder={'Enter an artist'}/>
          <ButtonSubmit parentOnClick={handleSubmit} placeholder={'Recommend songs'}/>
        </div>
      </div>
      <div className='footer-fade'></div>
    </div>
  );
}

export default HomePage;
