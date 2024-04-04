import { useState } from "react";
import { useCart } from "./CartContext";
import classes from "../modules/AddToCart.module.css";
import PropTypes from 'prop-types';

const AddToCart = ({ item }) => {
  const [quant, setQuant] = useState(1);
  const { addToCart } = useCart();

  const onQuantChange = (e) => {
    setQuant(e.target.value);
  }

  const increaseQuant = () => {
    setQuant(quant + 1)
  }

  const decreaseQuant = () => {
    if (quant > 1) {
      setQuant(quant - 1)
    }
  }

  const handleCartSubmit = () => {
    item = {...item, quantity: quant};
    addToCart(item);
    setQuant(1);
  }

  return (
    <>
      <form className={classes.cartForm}>
        <div className={classes.formBtns}>
          <label htmlFor="add-input"></label>
          <button type='button' onClick={decreaseQuant}>-</button>
          <input type="number" min={0} id="add-input" value={quant} onChange={onQuantChange}/>
          <button type='button' onClick={increaseQuant}>+</button>
        </div>
        <button type="button" id={classes.submitBtn} onClick={handleCartSubmit}>Add</button>
      </form>
    </>
  )
}

AddToCart.propTypes = {
  item: PropTypes.object
}

export default AddToCart;