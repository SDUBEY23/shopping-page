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
  const [search, setSearch] = useState(false);
  const [sideFilter, setSideFilder] = useState({
    gender: [],
    category: [],
    brand: [],
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

  // const handleFilters = (filters, category) => {
  //   let newProductList = [...productList];
  //   console.log(newProductList);
  //   if (filters.length === 0) {
  //     setProductList(productList);
  //   } else {
  //     console.log(filters);
  //     const newFilter = { ...sideFilter };
  //     newFilter[category] = filters;
  //     setSideFilder(newFilter);
  //     console.log(sideFilter);
  //     return setProductList(
  //       productList.filter((x) => x.gender.includes(filters))
  //     );
  //   }
  // };
  const handleFilters = (filters, category) => {
    setSearch(true);
    if (filters.length !== 0) {
      const newFilter = { ...sideFilter };
      newFilter[category] = filters;
      setSideFilder(newFilter);
      const newFilteredProductList = productList.filter((product) => {
        // return x.gender.includes(filters);
        return Object.values(product.gender).join("").includes(filters);
      });
      console.log(newFilteredProductList);
      setSearchResult(newFilteredProductList);
    } else {
      setSearchResult(productList);
    }
  };

  const searchHandler = (searchProduct) => {
    setSearch(false);
    setSearchProduct(searchProduct);
    if (searchProduct !== "") {
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
      <Header term={searchProduct} searchKeyword={searchHandler} />
      <SideFilters
        handleFilters={(filters) => handleFilters(filters, "gender")}
      />
      {search ? (
        <ProductList
          list={sideFilter.length < 1 ? productList : searchResult}
        />
      ) : (
        <ProductList
          list={searchProduct.length < 1 ? productList : searchResult}
        />
      )}
    </div>
  );
}

export default App;
