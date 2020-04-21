import React from 'react';
import "./Search-box.styles.css";

export const Searchbox=({ placeholder, handleChange })=>(
    <input
        className='search'
        type='search'
        placeholder={placeholder}
        onChange={handleChange}
        />
)