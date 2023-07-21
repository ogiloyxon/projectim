import React, {useContext,useState} from 'react'
import desert1 from '../Deserts/img/desert1.png'
import desert2 from '../Deserts/img/desert2.png'
import desert3 from '../Deserts/img/desert3.png'
import desert4 from '../Deserts/img/desert4.png'
import desert5 from '../Deserts/img/desert5.png'
import desert6 from '../Deserts/img/desert6.png'
import desert7 from '../Deserts/img/desert7.png'
import desert8 from '../Deserts/img/desert8.png'
const InfoContent = React.createContext();
export const useInfoContext = () => useContext(InfoContent);
export default function Deserts({children}) {
    const[products,setProducts]=useState([
        {
            id: 1,
            imgAddress:desert1,
            title:"Филадельфия кранч",
            about:"Семга, рис, сыр креметто, соус унаги, креветка, авокадо, чип...",
            price:"475",
            isSelect: false,
            isLiked: false
        },
        {
            id: 2,
            imgAddress:desert2,
            title:"Филадельфия крем-брюле",
            about:"Сливочный сыр, семга татаки с тростниковым сахаром, соус у...",
            price:"395",
            isSelect: false,
            isLiked: false
        },
        {
            id: 3,
            imgAddress:desert3,
            title:"Супер Филадельфия",
            about:"Действительно много семги, сливочный сыр, огурец, рис, н...",
            price:"425",
            isSelect: false,
            isLiked: false
        },
        {
            id: 4,
            imgAddress:desert4,
            title:"Тигр мама",
            about:"Тигровая креветка, огурец, авокадо, соус Айоли, рис, ик...",
            price:"525",
            isSelect: false,
            isLiked: false
        },
        {
            id: 5,
            imgAddress:desert5,
            title:"Тигр мама",
            about:"Тигровая креветка, огурец, авокадо, соус Айоли, рис, ик...",
            price:"525",
            isSelect: false,
            isLiked: false
        },
        {
            id: 6,
            imgAddress:desert6,
            title:"Филадельфия крем-брюле",
            about:"Сливочный сыр, семга татаки с тростниковым сахаром, соус у...",
            price:"395",
            isSelect: false,
            isLiked: false
        },
        {
            id: 7,
            imgAddress:desert7,
            title:"Филадельфия кранч",
            about:"Семга, рис, сыр креметто, соус унаги, креветка, авокадо, чип...",
            price:"475",
            isSelect: false,
            isLiked: false
        },
        {
            id: 8,
            imgAddress:desert8,
            title:"Супер Филадельфия",
            about:"Действительно много семги, сливочный сыр, огурец, рис, н...",
            price:"425",
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
