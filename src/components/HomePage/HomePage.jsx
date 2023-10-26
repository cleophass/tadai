// src/components/HomePage.jsx

import React, { useState } from 'react';
import './HomePage.css';
import TextInput from '../TextInput/TextInput';
import ButtonSubmit from '../ButtonSubmit/ButtonSubmit';

function HomePage({ parentOnClick }) {
  const [artist, setArtist] = useState('');
  const [song, setSong] = useState('');

  const handleSubmit = () => {
    parentOnClick(artist, song); 
  };

  return (
    <div className='home-container'>
      <img className='img-background' src='src\assets\SERGEY ZABELIN, DIGITAL ART, NATURE WALLPAPER.jpg'/>
      <div className='brand'>TADAI</div>
      <div className='content'>
        <div className='title-container'>
          <div className='title'>Be adventurous</div>
          <div className='subtitle'>Discover your new favorite songs</div>
        </div>
        <div className='form-container'>
          <TextInput setState={setSong} placeholder={'Enter a song name'}/>
          <TextInput setState={setArtist} placeholder={'Enter an artist'}/>
          <ButtonSubmit parentOnClick={handleSubmit} placeholder={'Recommend songs'}/>
        </div>
      </div>
      <div className='footer-fade'></div>
    </div>
  );
}

export default HomePage;
