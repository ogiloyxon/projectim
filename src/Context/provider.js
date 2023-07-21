import {InfoContent} from "./model";
import {useMemo, useState} from "react";

const getTotalSum = (products) => {
    return products.reduce((acc, cur) => acc + Number(cur.price), 0)
}
export const InfoContextProvider = ({children}) => {

    const [selectedProducts, setSelectedProducts] = useState([])
const totalSumSelectedProducts = useMemo(() => {
        return selectedProducts?.length ? getTotalSum(selectedProducts) : 0
    }, [selectedProducts])

    console.log('selectedProducts ', selectedProducts)

    return (
        <InfoContent.Provider
            value={{
                selectedProducts,
                setSelectedProducts,
                totalSumSelectedProducts,
            }}
        >
            {children}
        </InfoContent.Provider>
    )
}