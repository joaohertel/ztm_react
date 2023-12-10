import { useContext } from "react";
import "./shop-category.styles.scss";
import { useParams } from "react-router-dom";
import { CategoryContext } from "../../contexts/category.context";
import { Category } from "../../category/category.component";

// export 
const ShopCategory = () => {
  // recieve route param and call render depending on the param
  const { title } = useParams();

  // get the category title and items from the context
  const context = useContext(CategoryContext);
  const { categoryMap } = context;

  const items = categoryMap[title];
  const categoryObject = { title, items };

  if (!title) {
    return <p>Product Category not found</p>;
  } else {
    return (
      <Category
        categoryObject={categoryObject}
        key={title}
      />
    );
  }
};
