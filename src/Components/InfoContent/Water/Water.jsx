import React , {useContext,useState}  from 'react'
import water1 from './img/water1.png'
import water2 from './img/water2.png'
import water3 from './img/water3.png'
import water4 from './img/water4.png'
import water5 from './img/water5.png'
import water6 from './img/water6.png'
import water7 from './img/water7.png'
import water8 from './img/water8.png'
const InfoContent = React.createContext();
export const useInfoContext = () => useContext(InfoContent);
export default function Water({children}) {
        const [products, setProducts] = useState([
            {
                id: 1,
                imgAddress: water1,
                title: "Чикен Сладкий Чили",
                about: "Курица, Лук, Перец Халапеньо, Сыр Моцарелла, Томатный соу...",
                price: "399",
                isSelect: false,
                isLiked: false
            },
            {
                id: 2,
                imgAddress: water2,
                title: "EASY PEASY огуречный расколбас",
                about: "Курица, Лук, Перец Халапеньо...",
                price: "549",
                isSelect: false,
                isLiked: false
            },
            {
                id: 3,
                imgAddress: water3,
                title: "EASY PEASY чикен а-ля хрен",
                about: "Курица, Лук, Соус Карбонара,...",
                price: "249",
                isSelect: false,
                isLiked: false
            },
            {
                id: 4,
                imgAddress: water4,
                title: "4 сезона",
                about: "Бекон, Ветчина, Грибы, Курица, Лук, Маслины, Огурцы мари...",
                price: "630",
                isSelect: false,
                isLiked: false
            },
            {
                id: 5,
                imgAddress: water5,
                title: "4 сезона",
                about: "Бекон, Ветчина, Грибы, Курица, Лук, Маслины, Огурцы мари...",
                price: "630",
                isSelect: false,
                isLiked: false
            },
            {
                id: 6,
                imgAddress: water6,
                title: "EASY PEASY чикен а-ля хрен",
                about: "Курица, Лук, Соус Карбонара,...",
                price: "249",
                isSelect: false,
                isLiked: false
            },
            {
                id: 7,
                imgAddress: water7,
                title: "Чикен Сладкий Чили",
                about: "Курица, Лук, Перец Халапеньо, Сыр Моцарелла, Томатный соу...",
                price: "399",
                isSelect: false,
                isLiked: false
            },
            {
                id: 8,
                imgAddress: water8,
                title: "EASY PEASY огуречный расколбас",
                about: "Курица, Лук, Перец Халапеньо...",
                price: "549",
                isSelect: false,
                isLiked: false
            },
        ])
        const fakeData = {
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
