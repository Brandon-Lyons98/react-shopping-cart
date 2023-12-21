import { useEffect, useState } from "react";

function FetchData() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error(`This is an HTTP error: The status is ${response.status}`);
        }
        let actualData = await response.json();
        setItems(actualData);
      } catch(err) {
        console.log(err);
      }
    }
    getData();
  }, []);

  console.log(items);

  return items;

  // return (
  //   <div>
  //     {items.map((item) => (
  //       <div key={item.id}>
  //         <h2>Item: {item.title}</h2>
  //         <p>Description: {item.description}</p>
  //         <h3>{item.id}</h3>
  //       </div>
  //     ))}
  //   </div>
  // );
}

export default FetchData;