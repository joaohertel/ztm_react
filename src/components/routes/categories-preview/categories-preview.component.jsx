import { Fragment, useContext } from "react";
import { CategoryContext } from "../../contexts/category.context";
import { CategoryPreview } from "../../category-preview/category-preview.component";

export const CategoriesPreview = () => {
  // will need to get the products here from the context to pass to the category preview
  const { categoryMap } = useContext(CategoryContext);
  const titles = Object.keys(categoryMap);

  return (
    <Fragment>
      {titles.map((title) => (
        <CategoryPreview key={title} title={title} products={categoryMap[title]} />
      ))}
    </Fragment>
  );
};
