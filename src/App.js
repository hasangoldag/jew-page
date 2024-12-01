import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductList from "./components/ProductList";
import "./App.css";

const App = () => {
  const [products, setProducts] = useState([]);

   useEffect(() => {
     axios.get("/product.json").then((response) => {
      console.log(response,"***");
      setProducts(response.data);
     });
   }, []);
  

  return (
    <div className="App">
      <h1 className="header">Product List</h1>
      <ProductList products={products} />
    </div>
  );
};

export default App;
