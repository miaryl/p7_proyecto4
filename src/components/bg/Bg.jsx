import React from 'react';
import miImagen from '../../assets/img_planet.png';
import './bg.css';

function Bg() {
  return (
<div className="relative pr-8 self-end -top-[7rem] sm:-top-[14rem] flex justify-center sm:justify-end">
  <img
    src={miImagen}
    alt="Planeta girando"
    className="w-[150px] sm:w-[200px] animate-latido"
  />
</div>


  );
}


export default Bg;