import Product from "./Product";
import "./productList.css";

const ProductList = ({ list }) => {
  return (
    <div className="productList">
      {list.map((product) => {
        return <Product key={product.productId} {...product} />;
      })}
    </div>
  );
};

export default ProductList;
