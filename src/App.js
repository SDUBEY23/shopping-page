import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import ProductList from "./components/ProductList";
import Header from "./components/Navbar/Header";
import SideFilters from "./components/SideFilters/SideFilters";

function App() {
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

  const handleSearch = (e) => {
    if (e.target.value === "") {
      return setProductList(productList);
    } else {
      return setProductList(
        productList.filter((x) => x.product.includes(e.target.value))
      );
    }
  };
  return (
    <div className="App">
      <Header onChange={(e) => handleSearch(e)} />
      <SideFilters />
      <ProductList list={productList} />
    </div>
  );
}

export default App;
