import React, { useState, useContext } from 'react';
import './ButtonSubmit.css';
import BeatLoader from "react-spinners/BeatLoader";
import { useIsHome, useIsHomeUpdate } from '../../contexts/IsHomeContext';

function ButtonSubmit({ parentOnClick, placeholder}) {
    const [isDisabled, setIsDisabled] = useState(false);
    const isHome = useIsHome();
    
    const handleMouseUp = () => {
        parentOnClick();
        setIsDisabled(true);
    }

    return (
        <button className='button' 
        disabled={isDisabled}
        style={{width: !isDisabled ? '17rem' : '7rem'}}
        onMouseUp={handleMouseUp}
        >
            {!isDisabled ? placeholder : <BeatLoader color={'#ffffff'} size={5} />}
        </button>
    );
}

export default ButtonSubmit;
