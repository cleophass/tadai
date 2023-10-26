import React, { useState } from 'react';
import './TextInput.css';

function TextInput({ setState, placeholder }) {

    const handleChange = (e) => {
        setState(e.target.value);
    }

    return (
        <input className='input' placeholder={placeholder} onChange={handleChange}>
        </input>
    );
}

export default TextInput;
