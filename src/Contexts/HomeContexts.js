import React, { createContext, useState } from "react";
import all_products from "../Info/Allproducts";

export const HomeContexts = createContext(null);
const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < all_products.length; index++) {
        cart[index] = 0;
    }
    return cart;
}
const HomeContextsProvider = (props) => {
    const [cartProducts, setCartProducts] = useState(getDefaultCart());


     const addToCart = (ItemsId) => {
        setCartProducts((previous) => ({ ...previous, [ItemsId]: previous[ItemsId] + 1 }))
        console.log(cartProducts);
     }


     const removeFromCart = (ItemsId) => {
        setCartProducts((previous) => ({ ...previous, [ItemsId]: previous[ItemsId] - 1 }))
     }

     const getTotalItemAmount = () => {
        let totalPrice = 0;
        for(const items in cartProducts) 
        {
            if (cartProducts[items]>0) 
            {
                let itemData = all_products.find((product) => product.id===Number(items))
                totalPrice += itemData.current_price * cartProducts[items]
            }
        }
        return totalPrice;
     }

     const getTotalCartItems =() =>{
        let totalItem =0;
        for(const items in cartProducts)
        {
           if(cartProducts[items]>0)
           {
                totalItem+= cartProducts[items]
           }
        } 
        return totalItem;
     }

    const contextValue = {getTotalCartItems, getTotalItemAmount, all_products, cartProducts, addToCart, removeFromCart };

    return (
        <HomeContexts.Provider value={contextValue}>
            {props.children}
        </HomeContexts.Provider>
    )
}

export default HomeContextsProvider