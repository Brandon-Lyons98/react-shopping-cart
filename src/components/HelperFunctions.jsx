import products from "../utilities/FetchProducts";

export function incrementQuantity(id) {
  return products[id].quantity += 1;
}

export function decrementQuantity(id) {
  if (products[id].quantity <= 0) {
    return products[id].quantity;
  } else {
    return products[id].quantity -= 1;
  }
}