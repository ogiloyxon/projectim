import React, {useContext,useState} from 'react';
import sushi1 from './img/sushi1.png'
import sushi2 from './img/sushi2.png'
import sushi3 from './img/sushi3.png'
import sushi4 from './img/sushi4.png'
import sushi5 from './img/sushi5.png'
import sushi6 from './img/sushi6.png'
import sushi7 from './img/sushi7.png'
import sushi8 from './img/sushi8.png'
const InfoContent = React.createContext();
export const useInfoContext=()=>useContext(InfoContent);
export default function Sushi({children}) {
    const [products, setProducts] = useState([
        {
            id: 1,
            imgAddress: sushi1,
            title: "Филадельфия кранч",
            about: "Курица, Лук, Перец Халапеньо, Сыр Моцарелла, Томатный соу...",
            price: "399",
            isSelect: false,
            isLiked: false
        },
        {
            id: 2,
            imgAddress: sushi2,
            title: "EASY PEASY огуречный расколбас",
            about: "Курица, Лук, Перец Халапеньо...",
            price: "549",
            isSelect: false,
            isLiked: false
        },
        {
            id: 3,
            imgAddress: sushi3,
            title: "EASY PEASY чикен а-ля хрен",
            about: "Курица, Лук, Соус Карбонара,...",
            price: "249",
            isSelect: false,
            isLiked: false
        },
        {
            id: 4,
            imgAddress: sushi4,
            title: "4 сезона",
            about: "Бекон, Ветчина, Грибы, Курица, Лук, Маслины, Огурцы мари...",
            price: "630",
            isSelect: false,
            isLiked: false
        },
        {
            id: 5,
            imgAddress: sushi5,
            title: "4 сезона",
            about: "Бекон, Ветчина, Грибы, Курица, Лук, Маслины, Огурцы мари...",
            price: "630",
            isSelect: false,
            isLiked: false
        },
        {
            id: 6,
            imgAddress: sushi6,
            title: "EASY PEASY чикен а-ля хрен",
            about: "Курица, Лук, Соус Карбонара,...",
            price: "249",
            isSelect: false,
            isLiked: false
        },
        {
            id: 7,
            imgAddress: sushi7,
            title: "Чикен Сладкий Чили",
            about: "Курица, Лук, Перец Халапеньо, Сыр Моцарелла, Томатный соу...",
            price: "399",
            isSelect: false,
            isLiked: false
        },
        {
            id: 8,
            imgAddress: sushi8,
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
