import { createContext, useEffect, useState } from "react";
import {products} from './../assets/assets'

export const ShopContext=createContext();

const ShopContextProvider=(props)=>{
    const currency='$';
    const delivery_fee=15;
    const [search,setSearch]=useState('');
    const [showSearch,setShowSearch]=useState(false);
    const [cartItems,setCartItems]=useState({});
    

    const addToCart = async (itemId, size) => {
        let cartData = structuredClone(cartItems);
        if (cartData[itemId]) {
          if (cartData[itemId][size]) {
            cartData[itemId][size] += 1;
          } else {
            cartData[itemId][size] = 1;
          }
        } else {
          cartData[itemId] = {};
          cartData[itemId][size] = 1;
        }
      
        setCartItems(cartData); 
      };


      const countCartItems = () => {
        let total = 0;
        for (const itemId in cartItems) {
          for (const size in cartItems[itemId]) {
            total += cartItems[itemId][size];
          }
        }
       return total
      };

      const updateCartItems=async (itemId,size,quantity)=>{
        let copy=structuredClone(cartItems);
         copy[itemId][size]=quantity;
          setCartItems(copy); 
        //   countCartItems();
      }
      
      
      


    const value={
        products,currency,delivery_fee,search,setSearch,showSearch,setShowSearch,
        cartItems,addToCart,countCartItems,updateCartItems
    }

    return(
        <ShopContext.Provider value={value}>
            {props.children}

        </ShopContext.Provider>
    )

}
export default ShopContextProvider;