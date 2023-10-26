import React, { useState } from 'react';
import './ButtonSubmit.css';
import BeatLoader from "react-spinners/BeatLoader";

function ButtonSubmit({ song, artist, onSubmit, placeholder}) {

    const [isDisabled, setIsDisabled] = useState(false);

    const handleSubmit = () => {
        setIsDisabled(() => true);
        onSubmit({ song, artist });
    }

    return (
        <button className='button' 
        onClick={handleSubmit} 
        disabled={isDisabled}
        style={{width: !isDisabled ? '17rem' : '7rem'}}
        >
            {!isDisabled ? placeholder : <BeatLoader color={'#ffffff'} size={5} />}
        </button>
    );
}

export default ButtonSubmit;
