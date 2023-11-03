import { useContext } from "react";
import { ProductContext } from "../../contexts/product.context";

export const Shop = () => {
  const productsState = useContext(ProductContext);
  const { products } = productsState;

  return (
    <div>
      {products.map((elem) => (
        <div key={elem.id}>
          <p>{elem.name}</p>
        </div>
      ))}
    </div>
  );
};
