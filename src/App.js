import { useState } from "react";
import { useEffect } from "react";
import { fetchProducts } from "./utils";

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchInitialState = async () => {
      const products = await fetchProducts();
      setProducts(products);
    };
    fetchInitialState();
  }, []);
  console.log(products);
  return <>Full-Stack App!!!</>;
};

export default App;
