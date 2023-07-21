import React from 'react'
import location from '../../img/Location.svg'
import './Address.css'
export default function Address() {
    const btn = {
        backgroundColor:"#FF7010"
    }
    return (
        <div>
            <header className="p-3 mb-3 bg-white">
                <div className="row d-flex justify-content-between align-items-center">
                        <a href="#" className="col-4 d-flex align-items-center mb-2 mb-lg-0 link-body-emphasis text-decoration-none">
                        Проверить адрес доставки
                        </a>

                    <div className="col-8 d-flex align-items-center">
                        <form className="form-control w-100 me-3" role="search">
                           <div className="input-group">
                           <img src={location} alt="foto" />
                            <input type="search" className='form-control focus-ring focus-ring-light border-0' placeholder="Адрес" />
                           </div>
                        </form>

                        <button className='btn btn-lg-2 text-white' style={btn}>Проверить</button>
                    </div>
                </div>
            </header>
        </div>
    )
}
