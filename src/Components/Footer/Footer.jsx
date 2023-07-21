import React from 'react'
import logo from '../../img/Group 152.svg'
export default function Footer() {
  const text = {
    color :"#ff7010"
  }
  return (
    <div>
      <footer className="my-md-5">
    <div className="container-xxl">
    <div className="row">
      <div className="col-12 col-md">
        <img className="pb-5 mb-5" src={logo} alt="error"/>
        <small className="d-block mb-3 text-body-secondary">© Copyright 2023 — Куда Пицца</small>
      </div>
      <div className="col-6 col-md">
        <h5>Куда пицца</h5>
        <ul className="list-unstyled">
          <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">О компании</a></li>
          <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Пользовательское соглашение</a></li>
          <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Условия гарантии</a></li>
        </ul>
      </div>
      <div className="col-6 col-md">
        <h5>Помощь</h5>
        <ul className="list-unstyled">
          <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Ресторан</a></li>
          <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Контакты</a></li>
          <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Поддержка</a></li>
          <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Отследить заказ</a></li>
        </ul>
      </div>
      <div className="col-6 col-md">
        <h5>Контакты</h5>
        <ul className="list-unstyled">
          <li className="mb-1"><a className="link-secondary text-decoration-none" href="#"><i className='fa-solid fa-phone me-3' style={text}></i>+7 (926) 223-10-11</a></li>
          <li className="mb-1"><a className="link-secondary text-decoration-none" href="#"><i className='fa-solid fa-location-dot me-3' style={text}></i>Москва, ул. Юных Ленинцев, д.99</a></li>
         <ul className='list-unstyled d-flex'>
         <li className="mb-1 me-5"><a className="link-secondary text-decoration-none" href="#"><i className='fa-brands fa-facebook me-3' style={text}></i>Facebook</a></li>
          <li className="mb-1"><a className="link-secondary text-decoration-none" href="#"><i className='fa-brands fa-instagram me-3' style={text}></i>Instagram</a></li>
         </ul>
        </ul>
      </div>
    </div>
    </div>
  </footer>
    </div>
  )
}
