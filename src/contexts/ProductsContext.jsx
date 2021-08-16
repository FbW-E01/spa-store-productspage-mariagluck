import React, { useState, useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const ProductsContext = React.createContext();

export function ProductsContextProvider(props) {
    const [products, setProducts] = useState([
        {id: uuidv4(), name:"iPad", price:10}, 
        {id:uuidv4(), name: "Macbook Air", price:50},
        {id: uuidv4(), name: "airPods", price:40},
        ]);
    

    return (
        <ProductsContext.Provider value={[ products, setProducts ]}>
            {props.children}
        </ProductsContext.Provider>
    )
}

export const useProductsContext = () => {
    return useContext(ProductsContext);
}