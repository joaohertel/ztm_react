import { Fragment, useEffect, useState } from "react";
import { CategoryContainer } from "./category.styles.jsx";
import { useParams } from "react-router-dom";
import { ProductCard } from "../product-card/product-card.component";
import { useSelector } from "react-redux";
import { categorySelector } from "../../store/categories/categories.selector.js";

export const Category = () => {
  const { category } = useParams();
  const categoryMap = useSelector(categorySelector);
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
