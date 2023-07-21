import React, {useContext,useState} from 'react'
import combo1 from './img/combo1.png'
import combo2 from './img/combo2.png'
import combo3 from './img/combo3.png'
import combo4 from './img/combo4.png'
import combo5 from './img/combo5.png'
import combo6 from './img/combo6.png'
import combo7 from './img/combo7.png'
import combo8 from './img/combo8.png'
const InfoContent = React.createContext();
export const useInfoContext = () => useContext(InfoContent);
export default function ComboCard({children}) {
    console.log(children);
    const[products,setProducts]=useState([
        {
            id: 1,
            imgAddress: combo1,
            title: "Филадельфия кранч",
            about: "Семга, рис, сыр креметто, соус унаги, креветка, авокадо, чип...",
            price: "475",
            isSelect: false,
            isLiked: false
        },
        
        {
            id: 2,
            imgAddress: combo2,
            title: "Филадельфия крем-брюле",
            about: "Сливочный сыр, семга татаки с тростниковым сахаром, соус у...",
            price: "395",
            isSelect: false,
            isLiked: false
        },
        
        {
            id: 3,
            imgAddress: combo3,
            title: "Тигр мама",
            about: "Тигровая креветка, огурец, авокадо, соус Айоли, рис, ик...",
            price: "525",
            isSelect: false,
            isLiked: false
        },
        
        {
            id: 4,
            imgAddress: combo4,
            title: "Филадельфия крем-брюле",
            about: "Сливочный сыр, семга татаки с тростниковым сахаром, соус у...",
            price: "475",
            isSelect: false,
            isLiked: false
        },
        
        {
            id: 5,
            imgAddress: combo5,
            title: "Филадельфия кранч",
            about: "Семга, рис, сыр креметто, соус унаги, креветка, авокадо, чип...",
            price: "525",
            isSelect: false,
            isLiked: false
        },
        
        {
            id: 6,
            imgAddress: combo6,
            title: "Филадельфия кранч",
            about: "Семга, рис, сыр креметто, соус унаги, креветка, авокадо, чип...",
            price: "425",
            isSelect: false,
            isLiked: false
        },
        
        {
            id: 7,
            imgAddress: combo7,
            title: "Филадельфия кранч",
            about: "Семга, рис, сыр креметто, соус унаги, креветка, авокадо, чип...",
            price: "425",
            isSelect: false,
            isLiked: false
        },
        
        {
            id: 8,
            imgAddress: combo8,
            title: "Филадельфия кранч",
            about: "Семга, рис, сыр креметто, соус унаги, креветка, авокадо, чип...",
            price: "425",
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
