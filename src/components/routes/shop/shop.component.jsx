import { Route, Routes } from "react-router-dom";
import { CategoriesPreview } from "../categories-preview/categories-preview.component";
import { Category } from "../../category/category.component";
import { useDispatch } from 'react-redux';
import { useEffect } from "react";
import { getCategoriesAndItems } from "../../../utils/firebase/firebase.utils";
import { setCategories } from "../../../store/categories/categories.actions";

export const Shop = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    const asyncGetCategoriesAndItems = async () => {
      const categoryMapData = await getCategoriesAndItems();

      dispatch(setCategories(categoryMapData));
    };

    asyncGetCategoriesAndItems();
  },[dispatch]);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};
