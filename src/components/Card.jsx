import classes from '../modules/Card.module.css';
import { decrementQuantity, incrementQuantity } from './HelperFunctions';
import { formatCurrency } from '../utilities/CurrencyFormatter';
import products from '../utilities/FetchProducts';
import { useState } from 'react';

// eslint-disable-next-line react/prop-types
function Card({id, title, price, imgUrl, quantity}) {
  const [itemQuantity, setItemQuantity] = useState(0);
  quantity = itemQuantity;
  console.log(products);

  return (
    <>
      <div className={classes.container}>
        <div key={id} className={classes.cardStyles}>
          <div className={classes.card}>
            <div>
              <img src={imgUrl}/>
              <h2>{title}</h2>
            </div>
            {itemQuantity === 0 ? (
              <div>
                <h3 className={classes.closedPrice}>{formatCurrency(price)}</h3>
                <button className={classes.addBtn} onClick={() => {setItemQuantity(incrementQuantity(id-1))}}>+ Add To Cart</button>
              </div>
            ) : <div>
                  <h3>{formatCurrency(price)}</h3>
                  <div className={classes.counter}>
                    <button id={classes.counterBtn} onClick={() => {setItemQuantity(decrementQuantity(id-1))}}>-</button>
                    <p>{quantity}</p>
                    <button id={classes.counterBtn} onClick={() => {setItemQuantity(incrementQuantity(id-1))}}>+</button>
                  </div>
                </div>
                }
          </div>
        </div>
      </div>
    </>
  )
}

export default Card;