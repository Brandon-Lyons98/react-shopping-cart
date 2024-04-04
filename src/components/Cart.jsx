import Navbar from "./Navbar";
import { useCart } from './CartContext';
import classes from '../modules/Cart.module.css';
import { formatCurrency } from "../utilities/CurrencyFormatter";

const Cart = () => {
  const { cart, totalPrice, removeFromCart} = useCart();

  return (
    <>
      <Navbar/>
      <div className={classes.cartBody}>
        <h2>Your Cart</h2>
        <div>
          {cart.map((item) => (
            <div key={item.id}>
              <div className={classes.item}>
                <div className={classes.leftContainer}>
                  <img src={item.image} alt="item" />
                  <div className={classes.details}>
                    <p>{item.title}</p>
                    <p>Price: {formatCurrency(item.price)}</p>
                    <p>Quantity: {item.quantity}</p>
                    <p>Total Price: {formatCurrency(item.price * item.quantity)}</p>
                  </div>
                </div>
                  <div className={classes.rightContainer}>
                    <button className={classes.removeFromCartBtn} onClick={() => removeFromCart(item.id)}>Remove</button>
                  </div>
              </div>
              <hr />
            </div>
          ))}
        </div>
        <div className={classes.checkoutInfo}>
          <p>{`Total Price : ${formatCurrency(totalPrice)}`}</p>
          <button className={classes.checkoutBtn}>Checkout</button>
        </div>
      </div>
    </>
  )
}

export default Cart;