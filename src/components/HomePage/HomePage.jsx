// src/components/HomePage.jsx

import React, { useState } from 'react';
import './HomePage.css';
import TextInput from '../TextInput/TextInput';
import ButtonSubmit from '../ButtonSubmit/ButtonSubmit';

function HomePage({ onSend }) {
  const [artist, setArtist] = useState('');
  const [song, setSong] = useState('');

  const handleSubmit = () => {
    //wait 2s
    setTimeout(() => {
      onSend({ artist, song });
    }, 2000);
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
          <ButtonSubmit onSubmit={handleSubmit} placeholder={'Recommend songs'}/>
        </div>
      </div>
      <div className='footer-fade'></div>
    </div>
  );
}

export default HomePage;
