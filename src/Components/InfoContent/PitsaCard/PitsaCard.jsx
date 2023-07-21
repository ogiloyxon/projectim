import React, {useContext,useState} from 'react';
import pitsa1 from './imgAddress/pitsa1.png'
import pitsa2 from './imgAddress/pitsa2.png'
import pitsa3 from './imgAddress/pitsa3.png'
import pitsa4 from './imgAddress/pitsa4.png'
import pitsa5 from './imgAddress/pitsa5.png'
import pitsa6 from './imgAddress/pitsa6.png'
import pitsa7 from './imgAddress/pitsa7.png'
import pitsa8 from './imgAddress/pitsa8.png'
const InfoContent = React.createContext();
export const useInfoContext=()=>useContext(InfoContent);
export default function PitsaCard({children}) {
    const [products, setProducts] = useState([
        {
            id: 1,
            imgAddress: pitsa1,
            title: "Чикен Сладкий Чили",
            about: "Курица, Лук, Перец Халапеньо, Сыр Моцарелла, Томатный соу...",
            price: "399",
            isSelect: false,
            isLiked: false
        },
        {
            id: 2,
            imgAddress: pitsa2,
            title: "EASY PEASY огуречный расколбас",
            about: "Курица, Лук, Перец Халапеньо...",
            price: "549",
            isSelect: false,
            isLiked: false
        },
        {
            id: 3,
            imgAddress: pitsa3,
            title: "EASY PEASY чикен а-ля хрен",
            about: "Курица, Лук, Соус Карбонара,...",
            price: "249",
            isSelect: false,
            isLiked: false
        },
        {
            id: 4,
            imgAddress: pitsa4,
            title: "4 сезона",
            about: "Бекон, Ветчина, Грибы, Курица, Лук, Маслины, Огурцы мари...",
            price: "630",
            isSelect: false,
            isLiked: false
        },
        {
            id: 5,
            imgAddress: pitsa5,
            title: "4 сезона",
            about: "Бекон, Ветчина, Грибы, Курица, Лук, Маслины, Огурцы мари...",
            price: "630",
            isSelect: false,
            isLiked: false
        },
        {
            id: 6,
            imgAddress: pitsa6,
            title: "EASY PEASY чикен а-ля хрен",
            about: "Курица, Лук, Соус Карбонара,...",
            price: "249",
            isSelect: false,
            isLiked: false
        },
        {
            id: 7,
            imgAddress: pitsa7,
            title: "Чикен Сладкий Чили",
            about: "Курица, Лук, Перец Халапеньо, Сыр Моцарелла, Томатный соу...",
            price: "399",
            isSelect: false,
            isLiked: false
        },
        {
            id: 8,
            imgAddress: pitsa8,
            title: "EASY PEASY огуречный расколбас",
            about: "Курица, Лук, Перец Халапеньо...",
            price: "549",
            isSelect: false,
            isLiked: false
        },
    ])
    const fakeData={
        products,
        setProducts
      }
      const increament = ()=>{
        setProducts(price + price)
      }
    return (
        <div>
            <InfoContent.Provider value={fakeData}>
                <InfoContent.Consumer>
                    {(product, setProducts) => children}
                </InfoContent.Consumer>
            </InfoContent.Provider>
        </div>
    )
}
