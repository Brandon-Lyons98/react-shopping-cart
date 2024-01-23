import Navbar from "../components/Navbar";
import Card from "../components/Card";
import products from "../utilities/FetchProducts";
import classes from "../modules/Shop.module.css";

function DisplayShop() {
  return (
    <div>
      <Navbar />
      <div className={classes.shopContainer}>
        {products.map((item) => (
          <div key={item.id}>
            <Card id={item.id} title={item.title} price={item.price} imgUrl={item.imgURL} quantity={item.quantity}/>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DisplayShop;