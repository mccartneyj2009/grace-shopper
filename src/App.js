import { useState } from "react";
import { useEffect } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Link } from "react-router-dom";

const App = () => {
  const [products, setProducts] = useState([]);
  const [token, setToken] = useState("");
  const [user, setUser] = useState({});

  const fetchProducts = async () => {
    const response = await fetch("/api/products");
    const info = await response.json();
    setProducts(info);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return <>Full-Stack App!!!!</>;
};

export default App;
