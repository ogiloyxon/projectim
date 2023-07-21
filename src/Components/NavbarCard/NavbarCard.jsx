import React from 'react'
import fire from './img/Group 96.svg';
import combo from './img/Group 100.svg';
import pitsa from './img/Group 98.svg';
import napitki from './img/Group 99.svg';
import desert from './img/Group 104.svg';
import sushi from './img/Sushi.svg';
import zakuski from './img/path4528.svg';
import sousi from './img/Sauce.svg';
import './NavbarCard.css'
export default function NavbarCard() {
  return (
    <div className='container-xxl'>
        <div className="row d-flex justify-content-between pt-4 pb-4">
                <div className="col-1 card border-light icon-link-hover p-3 d-flex align-items-center justify-content-between">
                    <img className='card-img-top' style={{width:"32px", height:"40px"}} src={fire} alt="foto" />
                    <a className="nav-link" href="#Aksiya">Акции</a>
                </div>
                <div className="col-1 card border-light p-3 d-flex align-items-center justify-content-between">
                    <img className='card-img-top' style={{width:"32px", height:"40px"}} src={pitsa} alt="foto" />
                    <a className="nav-link" href="#pitsaCard">Пицца</a>
                </div>
                <div className="col-1 card border-light p-3 d-flex align-items-center justify-content-between">
                    <img className='card-img-top' style={{width:"32px", height:"40px"}} src={sushi} alt="foto" />
                    <a className="nav-link" href="#sushiCard">Суши</a>
                </div>
                <div className="col-1 card border-light p-3 d-flex align-items-center justify-content-between">
                    <img className='card-img-top' style={{width:"32px", height:"40px"}} src={napitki} alt="foto" />
                    <a className="nav-link" href="#water">Напитки</a>
                </div>
                <div className="col-1 card border-light p-3 d-flex align-items-center justify-content-between">
                    <img className='card-img-top' style={{width:"32px", height:"40px"}} src={zakuski} alt="foto" />
                    <a className="nav-link" href="#addit">Закуски</a>
                </div>
                <div className="col-1 card border-light p-3 d-flex align-items-center justify-content-between">
                    <img className='card-img-top' style={{width:"32px", height:"40px"}} src={combo} alt="foto" />
                    <a className="nav-link" href="#combo">Комбо</a>
                </div>
                <div className="col-1 card border-light p-3 d-flex align-items-center justify-content-between">
                    <img className='card-img-top' style={{width:"32px", height:"40px"}} src={desert} alt="foto" />
                    <a className="nav-link" href="#desert">Десерты</a>
                </div>
                <div className="col-1 card border-light p-3 d-flex align-items-center justify-content-between">
                    <img className='card-img-top' style={{width:"32px", height:"40px"}} src={sousi} alt="foto" />
                    <a className="nav-link" href="#sous">Соусы</a>
                </div>
        </div>
    </div>
  )
}
