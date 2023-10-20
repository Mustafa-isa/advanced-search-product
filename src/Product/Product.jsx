import React from "react";
import "./Product.css";
import Card from "../Components/Card/Card";
function Product({ allProduct }) {
  return (
    <div className="product">
  
      {allProduct.map((product, indx) => {
        return (
          <Card
            key={indx}
            img={product.img}
            title={product.title}
            star={product.star}
            reviews={product.reviews}
            prevPrice={product.prevPrice}
            newPrice={product.newPrice}
          />
        );
      })}
    </div>
  );
}

export default Product;
