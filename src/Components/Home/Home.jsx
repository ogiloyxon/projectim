import React from 'react'
import NavbarCard from '../NavbarCard/NavbarCard';
import Address from '../Address/Address';
import Aksiya from '../InfoContent/Aksiya/Aksiya';
import {ProductList} from "../ProductList";
import {fakeProducts} from "../../Context";
import Content from '../Readmore/Readmore';

export default function Home() {
  return (
    <div className='bg-light pb-5'>
        <div className="container-xxl">
        <NavbarCard/>
        <Aksiya/>
        <Address/>
        <div>
            <h1 id='pitsaCard'>Пицца</h1>
            <ProductList products={fakeProducts.pizza}/>
        </div>
        <div>
            <h1 id='sushiCard'>Суши</h1>
            <ProductList products={fakeProducts.sushi}/>
        </div>
        <div>
          <h1 id='addit'>Закуски</h1>
            <ProductList products={fakeProducts.addit}/>
        </div>
        <div>
          <h1 id='desert'>Десерты</h1>
            <ProductList products={fakeProducts.deserts}/>
        </div>
        <div>
          <h1 id='water'>Напитки</h1>
            <ProductList products={fakeProducts.water}/>
        </div>
        <div>
          <h1 id='sous'>Соусы</h1>
            <ProductList products={fakeProducts.sous}/>
        </div>
        <div>
          <h1 id='combo'>Комбо</h1>
            <ProductList products={fakeProducts.combo}/>
        </div>
        <Content/>
        </div>

    </div>
  )
}
