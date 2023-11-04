import { useContext } from "react";
import { ProductContext } from "../../contexts/product.context";
import { ProductCard } from "../../product-card/product-card.component";
import './shop.styles.scss';

export const Shop = () => {
  const productsState = useContext(ProductContext);
  const { products } = productsState;

  return (
    <div className='products-container'>
      {products.map((product) => (
          <ProductCard key={product.id} product={product}></ProductCard>
      ))}
    </div>
  );
};
