import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import ProductList from "./components/ProductList";
import Header from "./components/Navbar/Header";
import SideFilters from "./components/SideFilters/SideFilters";

function App() {
  const [productList, setProductList] = useState([]);
  const [sideFilter, setSideFilder] = useState({
    gender: [],
  });

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
    let newProductList = [...productList];
    console.log(newProductList);
    if (e.target.value === "") {
      return setProductList(productList);
    } else {
      return setProductList(
        newProductList.filter((x) => x.product.includes(e.target.value))
      );
    }
  };

  const handleFilters = (filters, category) => {
    let newProductList = [...productList];
    console.log(newProductList);
    if (filters.length === 0) {
      setProductList(productList);
    } else {
      console.log(filters);
      const newFilter = { ...sideFilter };
      newFilter[category] = filters;
      setSideFilder(newFilter);
      console.log(sideFilter);
      return setProductList(
        productList.filter((x) => x.gender.includes(filters))
      );
    }
  };
  return (
    <div className="App">
      <Header onChange={(e) => handleSearch(e)} />
      <SideFilters
        handleFilters={(filters) => handleFilters(filters, "gender")}
      />
      <ProductList list={productList} />
    </div>
  );
}

export default App;
