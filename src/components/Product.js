import React from "react";
import "./product.css";

const Product = ({
  discountDisplayLabel,
  mrp,
  brand,
  productName,
  price,
  searchImage,
}) => {
  return (
    <article className="product">
      <div className="product__container">
        <div className="product__image">
          <img src={searchImage} alt={productName} />
        </div>
        <div className="product__details">
          <h3>{brand}</h3>
          <h4>{productName}</h4>
          <h3 className="product__price">
            Rs: {price} <span className="product__mrp"> Rs. {mrp}</span>
            <span className="product__discount">{discountDisplayLabel}</span>
          </h3>
        </div>
      </div>
    </article>
  );
};

export default Product;
