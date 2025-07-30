import React from 'react';
import miImagen from '../../assets/img_planet.png';
import './bg.css';

function Bg() {
  return (
    <div className="bg-container">
      <img src={miImagen} alt="Planeta girando" className="planet-img" />
    </div>
  );
}

export default Bg;