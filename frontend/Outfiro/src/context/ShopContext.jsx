import React, { useEffect, useState } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { products } from "../assets/data";
import { toast } from "react-toastify";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "$";
  const delivery_charges = 10;
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(true);
  const [token, setToken] = useState("");
  const [cartItems, setCartItems] = useState({});

  //Adding items to Cart
  const addToCart = async (itemId, size) => {
    if (!size) {
      toast.error("Please select a size first");
      return;
    }
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
    toast.success("Item Added to the Cart");
  };

  const getCartcount = () =>{
    let totalCount = 0;
    for(const items in cartItems){
      for(const item in cartItems[items]){
        try {
          if(cartItems[items][item] > 0){
            totalCount += cartItems[items][item]
          }
        } catch (error) {
          console.log(error)
        }
      }
    }
    return totalCount;
  }

  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  const value = {
    currency,
    products,
    delivery_charges,
    navigate,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    token,
    setToken,
    addToCart,
    getCartcount
  };
  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
