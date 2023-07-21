import React, {useState} from 'react';
import {useInfoContext} from "../../Context";
import './prod.css'
const btn = {
    backgroundColor: "#FF7010",
}
const text = {
    color: "#FF7010",
}


export const ProductCard = (props) => {
    const {
        title, imgAddress, price, id, about
    } = props.productInfo;

    const [selected, setSelected] = useState(0)

    const {setSelectedProducts} = useInfoContext()

    const handleSelected = (e) =>{
        e.preventDefault()

        setSelected(prevN=> prevN + 1)

        setSelectedProducts(prev => [props.productInfo, ...prev])
    }

    return (
        <div className='col-3'>
            <div className="card mt-5">
                <img src={imgAddress} alt="foto" className='card-img-top' />
                <div className="card-body">
                    <h5 className='card-title'>{title}</h5>
                    <p className='card-text'>{about}</p>
                </div>
                <div className="card-footer border-0 bg-white d-flex justify-content-between">
                    <button
                        className="btn btn-lg text-white"
                        style={btn}
                        onClick={handleSelected}
                    >
                        {selected ? `Выбран ${selected}` : 'Выбрать'}
                    </button>
                    <h5 className='m-3' style={text}>от {price} ₽</h5>
                </div>
            </div>
        </div>
    )
};