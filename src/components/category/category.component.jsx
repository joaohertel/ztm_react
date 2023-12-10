import { Fragment, useContext, useEffect, useState } from "react";
import { CategoryContainer } from "./category.styles.jsx";
import { CategoryContext } from "../contexts/category.context";
import { useParams } from "react-router-dom";
import { ProductCard } from "../product-card/product-card.component";

export const Category = () => {
  const { category } = useParams();
  const { categoryMap } = useContext(CategoryContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(categoryMap[category]);
  }, [category, categoryMap]);

  return (
    <Fragment>
    <h2 className="title">{category.toUpperCase()}</h2>
    <CategoryContainer>
      {products &&
        products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
    </CategoryContainer>
    </Fragment>
  );
};
