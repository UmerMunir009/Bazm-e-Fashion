import { createContext, useEffect, useState } from "react";
import axios from 'axios'
import {toast} from 'react-toastify'


export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = '$';
  const delivery_fee = 15;
  const backendUrl = import.meta.env.VITE_BACKEND_URL


  const [search, setSearch] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({});
  const [products,setProducts]=useState([]);
  const [token,setToken]=useState(localStorage.getItem('token')? localStorage.getItem('token') : '')


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

    if(token){
      try {
        await axios.post(backendUrl + '/api/cart/add',{itemId,size},{headers:{token}})
        
      } catch (error) {
        console.log(error)
        toast.error(error.message)
        
      }
    }
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
  
  const updateCartItems = async (itemId, size, quantity) => {
    let copy = structuredClone(cartItems);
    copy[itemId][size] = quantity;
    setCartItems(copy);
    
    if(token){
      try {
        await axios.post(backendUrl + '/api/cart/update',{itemId,size,quantity},{headers:{token}})
        
      } catch (error) {
        console.log(error)
        toast.error(error.message)
        
      }
    }
    
  }

  const getTotalBillofCart = () => {
    let totalAmount = 0;
    for (const id in cartItems) {
      let relatedProductToID = products.find(item => item._id === id);
      for (const size in cartItems[id]) {
        try {
          if (cartItems[id][size] > 0) {
            totalAmount += relatedProductToID.price * cartItems[id][size];
          }
        } catch (error) {
          console.log(error);
        }
      }
    }
    return totalAmount;
  }


  const fetchProducts = async () => {
    try {
      const response = await axios.get(backendUrl + "/api/product/list");
      console.log(response.data.products)

      if (response.data.success) {
        setProducts(response.data.products);
      }
      else {
        console.log(response.data.message)
      }

    } catch (error) {
      console.log(error)
    }
  }

   const fetchCartItems= async (token)=>{
     try {
      const response = await axios.post(backendUrl + "/api/cart/get",{},{headers:{token}});
      

      if (response.data.success) {
        setCartItems(response.data.cartData);
      }
    } catch (error) {
      console.log(error)
    }
    
   }

  useEffect(() => {
    fetchProducts();
    if(localStorage.getItem('token')){
      fetchCartItems(token)
    }
  }, [])





  const value = {
    products, currency, delivery_fee, search, setSearch, showSearch, setShowSearch,
    cartItems, addToCart, countCartItems, updateCartItems, getTotalBillofCart, backendUrl,
    token,setToken,setCartItems,cartItems
  }

  return (
    <ShopContext.Provider value={value}>
      {props.children}

    </ShopContext.Provider>
  )

}
export default ShopContextProvider;