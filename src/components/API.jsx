async function API() {
  const url = "https://fakestoreapi.com/products";

  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
      console.log(error);
  }
}

export default API;