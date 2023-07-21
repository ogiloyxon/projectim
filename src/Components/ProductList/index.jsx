import React from 'react';
import {ProductCard} from "../ProductCard";

export const ProductList = ({products}) => {
    return (
        <div>
            <div className="row">
                <div className="main d-flex flex-wrap justify-content-between">
                    {
                        products.map( prod => {
                            return <ProductCard key={prod.id} productInfo={prod}/>
                        })
                    }
                </div>
            </div>
        </div>
    );
};