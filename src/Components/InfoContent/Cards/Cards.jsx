import React,{useState} from 'react';
import './Cards.css';
export default function Card(props) {
  const btn = {
    backgroundColor: "#FF7010",
  }
  const text = {
    color: "#FF7010",
  }
  const {
    title, imgAddress, price, id, about
  } = props.productInfo;
  return (
    <div className='col-3'>
          <div className="card mt-5">
            <img src={imgAddress} alt="foto" className='card-img-top' />
            <div className="card-body">
              <h5 className='card-title'>{title}</h5>
              <p className='card-text'>{about}</p>
            </div>
            <div className="card-footer border-0 bg-white d-flex justify-content-between">
              <button className="btn btn-lg text-white" style={btn} onClick={handleClick}>Выбрать</button>
              <h5 className='m-3' style={text}>от {price} ₽</h5>
            </div>
          </div>
      </div>
  )
}
