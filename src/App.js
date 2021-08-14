import "./App.css";
import ProductList from "./components/ProductList";
import Header from "./components/Navbar/Header";
import SideFilters from "./components/SideFilters/SideFilters";

function App() {
  return (
    <div className="App">
      <Header />
      <SideFilters />
      <ProductList />
    </div>
  );
}

export default App;
