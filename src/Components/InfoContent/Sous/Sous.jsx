import React , {useContext,useState} from 'react'
import sous1 from './img/sous1.png'
import sous2 from './img/sous2.png'
import sous3 from './img/sous3.png'
import sous4 from './img/sous4.png'
import sous5 from './img/sous5.png'
import sous6 from './img/sous6.png'
import sous7 from './img/sous7.png'
import sous8 from './img/sous2.png'
const InfoContent = React.createContext();
export const useInfoContext = () => useContext(InfoContent);
export default function Sous({ children }) {
    const [products, setProducts] = useState([
        {
            id: 1,
            imgAddress: sous1,
            title: "Филадельфия кранч",
            about: "",
            price: "475",
            isSelect: false,
            isLiked: false
        },
        {
            id: 2,
            imgAddress: sous2,
            title: "Филадельфия крем-брюле",
            about: "",
            price: "395",
            isSelect: false,
            isLiked: false
        },
        {
            id: 3,
            imgAddress: sous3,
            title: "Супер Филадельфия",
            about: "",
            price: "425",
            isSelect: false,
            isLiked: false
        },
        {
            id: 4,
            imgAddress: sous4,
            title: "Тигр мама",
            about: "",
            price: "525",
            isSelect: false,
            isLiked: false
        },
        {
            id: 5,
            imgAddress: sous5,
            title: "Филадельфия крем-брюле",
            about: "",
            price: "395",
            isSelect: false,
            isLiked: false
        },
        {
            id: 6,
            imgAddress: sous6,
            title: "Тигр мама",
            about: "",
            price: "525",
            isSelect: false,
            isLiked: false
        },
        {
            id: 7,
            imgAddress: sous7,
            title: "Супер Филадельфия",
            about: "",
            price: "425",
            isSelect: false,
            isLiked: false
        },
        {
            id: 8,
            imgAddress: sous8,
            title: "Филадельфия кранч",
            about: "",
            price: "475",
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
