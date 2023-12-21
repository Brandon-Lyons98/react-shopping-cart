import classes from './Card.module.css';

async function fetchProducts() {
  let response = await fetch('https://fakestoreapi.com/products');
  let data = await response.json();
  return data;
}

const products = await fetchProducts();

function Card() {
  console.log('here', products[0].title);

  return (
    <>
      <div className={classes.container}>
        {products.map((item) => (
          <div key={item.id} className={classes.cardStyles}>
            <div>
              <img src={item.image}/>
              <h2>{item.title}</h2>
              <h3>${item.price}</h3>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Card;