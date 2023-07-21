import React from 'react'
import img1 from './img/Group 81.png';
import img2 from './img/Group 82.png';
import img3 from './img/Group 83.png';
import img4 from './img/Group 84.png'
export default function Aksiya() {
  return (
    <div id='Aksiya' className="aksiya pb-4">
        <div className='row'>
        <div className="col-3">
            <img src={img1} alt="foto" />
        </div>
        <div className="col-3">
            <img src={img2} alt="foto" />
        </div>
        <div className="col-3">
            <img src={img3} alt="foto" />
        </div>
        <div className="col-3">
            <img src={img4} alt="foto" />
        </div>
    </div>
    </div>
  )
};
