import React, { useEffect } from 'react'
import { ShopContext } from '../context/ShopContext'

const Cart = () => {
  const {products, currency, cartItems, getCartCount, navigate } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);
  const [quantities, setQuantities] = useState([]);

  useEffect(()=>{

  })
  
  return (
    
  )
}

export default Cart