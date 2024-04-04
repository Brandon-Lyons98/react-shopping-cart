import classes from '../modules/ShopItems.module.css';
import AddToCart from './AddToCart';
import { formatCurrency } from '../utilities/CurrencyFormatter';
import PropTypes from 'prop-types';

const ShopItems = ({ item }) => {
  return (
    <>
      <div className={classes.cardStyles}>
        <div>
          <img src={item.image} />
        </div>
        <div>
          <h4 className={classes.title}>{item.title}</h4>
          <p className={classes.price}>{formatCurrency(item.price)}</p>
        </div>
        <AddToCart item={item} />
      </div>
    </>
  )
}

ShopItems.propTypes = {
  item: PropTypes.object,
}

export default ShopItems;