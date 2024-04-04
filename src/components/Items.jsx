import { useEffect, useState } from "react";
import ShopItems from "./ShopItems";
import API from "./API";
import classes from "../modules/Items.module.css";

const Items = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function fetchData() {
      setItems([]);
      const data = await API();
      if (!ignore) {
        setItems(data);
      }
    }
    let ignore = false;
    fetchData();
    return () => {ignore = true}
  }, [])

  return (
    <>
      <div className={classes.container}>
        <div className={classes.product}>
          {items && items.map((item) => (
            <ShopItems key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  )
}

export default Items;