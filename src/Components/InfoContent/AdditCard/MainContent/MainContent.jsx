import React from 'react'
import {useInfoContext} from '../AdditCard'
import Card from '../../Cards/Cards'
export default function MainContext() {
    const {products,setproducts}=useInfoContext();
  return (
        <div>
            <div className="row">
                <div className="main d-flex flex-wrap justify-content-between">
                    {
                        products.map(prod=>{
                            return <Card key={prod.id} productInfo={prod}/>
                        })
                    }
                </div>
            </div>
        </div>
  )
}