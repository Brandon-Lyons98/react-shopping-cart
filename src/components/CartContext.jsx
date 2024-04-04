import { createContext, useContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const calculateTotalPrice = () => {
      const sum = cart.reduce((total, item) => total + (item.quantity * item.price), 0);
      return Math.floor(sum * 100) / 100;
    }

    setTotalPrice(calculateTotalPrice());
  }, [cart]);

  function addToCart(item) {
    const exsistingItemId = cart.findIndex(cartItem => cartItem.id === item.id);
    if (exsistingItemId !== -1) {
      const updatededCart = [...cart];
      updatededCart[exsistingItemId].quantity += item.quantity;
      setCart(updatededCart);
    } else {
      setCart([...cart, item]);
    }
  }
  
  function removeFromCart(itemId) {
    setCart(cart.filter(item => item.id !== itemId))
  }

  return (
    <CartContext.Provider value={{cart, totalPrice, addToCart, removeFromCart}}>
      {children}
    </CartContext.Provider>
  )
}

CartProvider.propTypes = {
  children: PropTypes.object,
}