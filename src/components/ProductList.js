import React, { useState, useEffect } from "react";
import axios from "axios";
import Product from "./Product";
import "./productList.css";

const ProductList = () => {
  const [loading, setLoading] = useState(false);
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const request = await axios.get(
        "https://demo7242716.mockable.io/products"
      );
      setProductList(request.data.products);
      return request;
    }
    fetchProducts();
  }, []);
  console.log(productList);
  return (
    <div className="productList">
      {productList.map((product) => {
        return <Product key={product.productId} {...product} />;
      })}
    </div>
  );
};

export default ProductList;
