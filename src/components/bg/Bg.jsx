import React from 'react';
import miImagen from '../../assets/img_planet.png';
import './bg.css';

function Bg() {
  return (
    <div className="self-end pr-8 relative -top-[14rem] sm:-top-[7rem]">
      <img
        src={miImagen}
        alt="Planeta girando"
        className="w-[200px] sm:w-[150px] animate-latido"
      />
    </div>
  );
}


export default Bg;