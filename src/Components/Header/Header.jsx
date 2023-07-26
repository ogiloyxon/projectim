import React, { useRef } from 'react'
import location from '../../img/Location.svg';
import logo from '../../img/Group 152.svg'
import './Header.css'
import { useInfoContext } from "../../Context";

const btn = {
  backgroundColor: "#ff7010",
  border: "#ff7010"
}
const text = {
  color: "#ff7010"
}

export default function Header() {

  const { totalSumSelectedProducts } = useInfoContext()
  const { setSelectedProducts } = useInfoContext()
  const username = useRef();
  const useremail = useRef();
  const userpassword = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      email: useremail.current.value,
      password: userpassword.current.value,
      username: username.current.value,
    }
    console.log(user);
  }
  return (
    <div className='Header p-2'>
      <nav className="nav d-flex align-items-center justify-content-center">
        <div className="container-xxl">
          <div className="row d-flex justify-content-between border border-top-0 border-end-0 border-start-0 border-bottom-2">
            <div className="col-6 d-flex justify-content-between">
              <div className="location d-flex">
                <img src={location} alt="error" />
                <select className='border-0 text-dark p-0' name="" id="">
                  <option value="Москва">Москва</option>
                  <option value="Uzb">Uzbek</option>
                  <option value="London">London</option>
                </select>
              </div>
              <p className='fs-6'>Проверить адрес</p>
              <p className='fs-6'>
                Среднее время доставки*: <span className='fw-bold'>00:24:19</span>
              </p>
            </div>
            <div className="col-5 d-flex align-items-center justify-content-between">
              <p className='fs-6'>Время работы: с 11:00 до 23:00</p>
              <div className="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabIndex="-1">
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h1 className="modal-title fs-5" id="exampleModalToggleLabel">Регистрация</h1>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                      <button class="btn btn-primary" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal">Open second modal</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabIndex="-1">
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h1 className="modal-title fs-5" id="exampleModalToggleLabel2">Регистрация</h1>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                      <form action="#">
                        <label htmlFor="username" className="form-label">Username</label>
                        <input rel='username' type="text" className='form-control' placeholder='name' />
                        <label htmlFor="useremail" className="form-label">Email address</label>
                        <input rel='useremail' type="email" className='form-control' placeholder='email' />
                        <label htmlFor="userpassword" className="form-label">Password</label>
                        <input rel='userpassword' type="password" className='form-control' placeholder='password' />
                        <button className='btn btn-outline-primary me-5 mt-3' onClick={handleSubmit}>Sign in</button>
                        <button className="btn btn-primary mt-3" data-bs-target="#exampleModalToggle" data-bs-toggle="modal">Back to first</button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <button className="btn bg-none" data-bs-target="#exampleModalToggle" data-bs-toggle="modal"><i className='fa-regular fa-user fs-5 pe-2' style={text}></i>Войти в аккаунт</button>
            </div>
          </div>
          <nav className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3">
            <div className="col-md-3 mb-2 mb-md-0">
              <a href="/" className="d-inline-flex link-body-emphasis text-decoration-none">
                <img src={logo} alt="eror" />
              </a>
            </div>

            <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
              <li><a href="#" className="nav-link text-dark px-2 link-secondary">Акции</a></li>
              <li><a href="#pitsaCard" className="nav-link text-dark px-2">Пицца</a></li>
              <li><a href="#sushiCard" className="nav-link text-dark px-2">Суши</a></li>
              <li><a href="#water" className="nav-link text-dark px-2">Напитки</a></li>
              <li><a href="#addit" className="nav-link text-dark px-2">Закуски</a></li>
              <li><a href="#combo" className="nav-link text-dark px-2">Комбо</a></li>
              <li><a href="#desert" className="nav-link text-dark px-2">Десерты</a></li>
              <li><a href="#sous" className="nav-link text-dark px-2">Соусы</a></li>
              <li><select className='border-0' name="" id="">
                <option value="">Другое</option>
              </select></li>
            </ul>

            <div className="col-md-3 text-end">
              <button
                type="button"
                style={btn}
                className="shopBtn btn btn-warning btn-lg text-white rounded-1"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                <i className='fa-solid fa-cart-shopping'></i> {totalSumSelectedProducts} ₽
              </button>
              <div className="modal fade modalV" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog w-100 m-0">
                  <div className="modal-content">
                    <div className="modal-header border-0">
                      <h1 className="modal-title fs-5" id="exampleModalLabel"><div className='fs-1'>Ваш заказ</div></h1>
                      <button type="button" className="btn-close fs-3" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                      {setSelectedProducts}
                    </div>
                    <div className="modal-footer d-flex justify-content-between">
                      <span className='fs-4 fw-bold' style={text}>Итого: <span>{totalSumSelectedProducts}</span> ₽</span>
                      <button type="button" style={btn} className="btn text-white btn-lg shopBtn">Оформить заказ</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </nav>
    </div>
  )
}
