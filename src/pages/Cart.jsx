import classes from '../modules/Card.module.css';

function ShoppingCart({name, price, quantity}) {
  return (
    <div className={classes.cartInfo}>
      <h1>{name}</h1>
      <p>{price}</p>
      <p>{quantity}</p>
    </div>
  )
}

export default ShoppingCart;