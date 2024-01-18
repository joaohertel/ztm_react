import { Fragment } from "react";
import { CategoryPreview } from "../../category-preview/category-preview.component";
import { useSelector } from "react-redux";
import { categorySelector } from "../../../store/categories/categories.selector";

export const CategoriesPreview = () => {
  const categoryMap = useSelector(categorySelector);

  const titles = Object.keys(categoryMap);

  return (
    <Fragment>
      {titles.map((title) => (
        <CategoryPreview key={title} title={title} products={categoryMap[title]} />
      ))}
    </Fragment>
  );
};
