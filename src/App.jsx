import React from "react";
import Nav from "./Navigator/Nav";
import Product from "./Product/Product";
import Sidebar from "./Sidbar/Sidebar";
import Recommended from "./Recommendation/Recommendation";
import products from "./db/data";
import './App.css'
import { useState } from "react";
function App() {
  const [allProduct, setProduct] = useState(products);

  const [search, setSearch] = useState("");
  const onChange = (e) => {
    setSearch(e.target.value);
    changesInput(search);
  };
  const changesInput = (q) => {
    setProduct((prvious) =>
      prvious.filter(
        (product) => product.title.toLowerCase().indexOf(q.toLowerCase()) !== -1
      )
    );
  };
  const clicking = (e) => {
    console.log("clicked");
    console.log(e.target.value);
    if (e.target.value === "") {
      setProduct(products);
    } else {
      let filterdRecommandedProduct = products.filter(
        (pre) => pre.company === e.target.value
      );
      setProduct(filterdRecommandedProduct);
    }
  };
const catogeryClick =(e)=>{
  console.log(e.target.value)
  let filterd = products.filter(product => product.category === e.target.value)
    setProduct(filterd)
 
}
const colorClick =(e)=>{
  console.log(e.target.value)
  let filterd = products.filter(product => product.color === e.target.value)
  setProduct(filterd)
}
const priceClick =(e)=>{
  console.log(e.target.value)
  let filterd = products.filter(product => product.newPrice === e.target.value)
    setProduct(filterd)
}

  return (
    <>
      <Sidebar catogeryClick={catogeryClick} colorClick={colorClick} priceClick={priceClick} />
      <Nav onChange={onChange} />
      <Recommended clicking={clicking} />
      <Product allProduct={allProduct} />
    </>
  );
}

export default App;
