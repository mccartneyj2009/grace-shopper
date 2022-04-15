import { useHistory, useParams, Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';

const Products = (token) => {

  const [products, setProducts] = useState([]);


  function fetchProducts() {
      const response = await fetch(
          "xyz123",
          {
          method: "GET",
          headers: {
              "content-Type": "application/json",
          },
        }
      );
      const productList = await response.json();
      console.log(productList, "productList");
      setProducts(productList);
  }

  useEffect(() => {
    fetchProducts();
  }, []);

//   return ()
      
     
  export default Products;