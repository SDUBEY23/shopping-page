import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import ProductList from "./components/ProductList/ProductList";
import Header from "./components/Navbar/Header";
import GenderFilter from "./components/SideFilters/GenderFilter";
import CategoryFilter from "./components/SideFilters/CategoryFilter";
import BrandFilter from "./components/SideFilters/BrandFilter";

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

  const handleGenderFilters = (filters, category) => {
    setSearch(true);
    if (filters.length !== 0) {
      const newFilter = { ...sideFilter };
      newFilter[category] = filters;
      setSideFilder(newFilter);
      const newFilteredProductList = productList.filter((product) => {
        // return x.gender.includes(filters);
        return Object.values(product.gender).join("").includes(filters);
      });
      setSearchResult(newFilteredProductList);
    } else {
      setSearchResult(productList);
    }
  };

  const handleCategoryFilters = (filters, category) => {
    setSearch(true);
    if (filters.length !== 0) {
      const newFilter = { ...sideFilter };
      newFilter[category] = filters;
      setSideFilder(newFilter);
      const newFilteredProductList = productList.filter((product) => {
        return Object.values(product.category).join("").includes(filters);
      });
      setSearchResult(newFilteredProductList);
    } else {
      setSearchResult(productList);
    }
  };
  const handleBrandFilters = (filters, category) => {
    setSearch(true);
    if (filters.length !== 0) {
      const newFilter = { ...sideFilter };
      newFilter[category] = filters;
      setSideFilder(newFilter);
      const newFilteredProductList = productList.filter((product) => {
        return Object.values(product.brand).join("").includes(filters);
      });
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
      setSearchResult(newProductList);
    } else {
      setSearchResult(productList);
    }
  };
  return (
    <div className="App">
      <Header term={searchProduct} searchKeyword={searchHandler} />
      <GenderFilter
        handleGenderFilters={(filters) =>
          handleGenderFilters(filters, "gender")
        }
      />
      <CategoryFilter
        handleCategoryFilters={(filters) =>
          handleCategoryFilters(filters, "category")
        }
      />
      <BrandFilter
        handleBrandFilters={(filters) => handleBrandFilters(filters, "brand")}
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
