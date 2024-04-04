import styles from '../modules/Navbar.module.css';
import { Link } from 'react-router-dom';
import { useCart } from './CartContext';

function Navbar() {
  const { cart } = useCart();

  function getTotal() {
    let sum = 0;
    cart.filter((item) => sum += item.quantity);
    return sum;
  }
  
  return (
    <nav className={styles.navbar}>
      <h1 className={styles.mainText}>SimplyShop</h1>
      <ul className={styles.listItems}>
        <li className={styles.listItemsChildren}>
          <Link to='/'>Home</Link>
        </li>
        <li className={styles.listItemsChildren}>
          <Link to='/shop'>Shop</Link>
        </li>
        <li className={styles.listItemsChildren}>
          <Link to='/cart' className={styles.cartLink}>
            <div>
              <div>Cart ({getTotal()})</div>
            </div>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;