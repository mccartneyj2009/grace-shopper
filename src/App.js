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

  return <>Full-Stack App!</>;
};

export default App;
