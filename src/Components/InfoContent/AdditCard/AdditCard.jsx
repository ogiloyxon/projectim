import React, {useContext,useState} from 'react'
import addit1 from './img/addit1.png'
import addit2 from './img/addit2.png'
import addit3 from './img/addit3.png'
import addit4 from './img/addit4.png'
import addit5 from './img/addit5.png'
import addit6 from './img/addit6.png'
import addit7 from './img/addit7.png'
import addit8 from './img/addit8.png'
const InfoContent = React.createContext();
export const useInfoContext = () => useContext(InfoContent);
export default function AdditCard({children}) {
    const[products,setProducts]=useState([
        {
            id: 1,
            imgAddress:addit1,
            title:"Филадельфия кранч",
            about:"Семга, рис, сыр креметто, соус унаги, креветка, авокадо, чип...",
            price:"475",
            isSelect: false,
            isLiked: false
        },
        {
            id: 2,
            imgAddress:addit2,
            title:"Филадельфия крем-брюле",
            about:"Сливочный сыр, семга татаки с тростниковым сахаром, соус у...",
            price:"395",
            isSelect: false,
            isLiked: false
        },
        {
            id: 3,
            imgAddress:addit3,
            title:"Супер Филадельфия",
            about:"Действительно много семги, сливочный сыр, огурец, рис, н...",
            price:"425",
            isSelect: false,
            isLiked: false
        },
        {
            id: 4,
            imgAddress:addit4,
            title:"Тигр мама",
            about:"Тигровая креветка, огурец, авокадо, соус Айоли, рис, ик...",
            price:"525",
            isSelect: false,
            isLiked: false
        },
        {
            id: 5,
            imgAddress:addit5,
            title:"Тигр мама",
            about:"Тигровая креветка, огурец, авокадо, соус Айоли, рис, ик...",
            price:"525",
            isSelect: false,
            isLiked: false
        },
        {
            id: 6,
            imgAddress:addit6,
            title:"Супер Филадельфия",
            about:"Действительно много семги, сливочный сыр, огурец, рис, н...",
            price:"425",
            isSelect: false,
            isLiked: false
        },
        {
            id: 7,
            imgAddress:addit7,
            title:"Филадельфия крем-брюле",
            about:"Сливочный сыр, семга татаки с тростниковым сахаром, соус у...",
            price:"95",
            isSelect: false,
            isLiked: false
        },
        {
            id: 8,
            imgAddress:addit8,
            title:"Филадельфия кранч",
            about:"Семга, рис, сыр креметто, соус унаги, креветка, авокадо, чип...",
            price:"475",
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
