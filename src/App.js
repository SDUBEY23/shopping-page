import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import ProductList from "./components/ProductList";
import Header from "./components/Navbar/Header";
import SideFilters from "./components/SideFilters/SideFilters";

function App() {
  const [productList, setProductList] = useState([]);
  const [searchProduct, setSearchProduct] = useState("");
  const [searchResult, setSearchResult] = useState([]);
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
  // console.log(productList);

  // const handleSearch = (e) => {
  //   let newProductList = [...productList];
  //   console.log(newProductList);
  //   if (e.target.value === "") {
  //     return setProductList(productList);
  //   } else {
  //     return setProductList(
  //       newProductList.filter((x) => x.product.includes(e.target.value))
  //     );
  //   }
  // };

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

  const searchHandler = (searchProduct) => {
    setSearchProduct(searchProduct);
    if (searchProduct !== "") {
      // const newProductList = productList.filter((product) => {
      //   return Object.values(product.product)
      //     .join("")
      //     .toLocaleLowerCase()
      //     .includes(searchProduct.toLocaleLowerCase());
      // });
      const newProductList = productList.filter((x) =>
        x.product.toLowerCase().includes(searchProduct.toLowerCase())
      );
      console.log(newProductList);
      setSearchResult(newProductList);
    } else {
      setSearchResult(productList);
    }
  };
  return (
    <div className="App">
      <Header
        // onChange={(e) => handleSearch(e)}
        term={searchProduct}
        searchKeyword={searchHandler}
      />
      <SideFilters
        handleFilters={(filters) => handleFilters(filters, "gender")}
      />
      <ProductList
        list={searchProduct.length < 1 ? productList : searchResult}
      />
    </div>
  );
}

export default App;
