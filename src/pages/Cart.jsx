import classes from '../modules/Cart.module.css';
import Navbar from "../components/Navbar";
import products from '../utilities/FetchProducts';
import { formatCurrency } from '../utilities/CurrencyFormatter';
import { totalCost } from '../components/HelperFunctions';

function ShoppingCart() {
  return (
    <div>
      <Navbar />
      <div className={classes.cartInfo}>
        {products.map((item) => (
          item.quantity > 0 ?
          <div className={classes.cartCardContainer} key={item.id}>
            <h1>{item.title}</h1>
            <div className={classes.total}>
              <p>{item.quantity} x {formatCurrency(item.price)} = {formatCurrency(item.quantity * item.price)}</p>
            </div>
          </div> : null
        ))}
        <h1>Total Cost: {formatCurrency(totalCost())}</h1>
      </div>
    </div>
  )
}

export default ShoppingCart;