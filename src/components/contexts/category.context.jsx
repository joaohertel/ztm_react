import { useEffect, createContext, useState } from "react";
import {
  getCategoriesAndItems,
} from "../../utils/firebase/firebase.utils.js";

export const CategoryContext = createContext({
  categoryMap:{},
  setCategoryMap: () => null
});

export const CategoryProvider = ({ children }) => {
  const [categoryMap, setCategoryMap] = useState({});
  const categoryState = { categoryMap, setCategoryMap };

  useEffect(() => {
    const asyncGetCategoriesAndItems = async () => {
      const categoryMapData = await getCategoriesAndItems();

      setCategoryMap(categoryMapData);
    };

    asyncGetCategoriesAndItems();
  },[]);

  // useEffect(()=>{
  //   console.log('PRODUCT_DATA_JS = ', SHOP_DATA);
  //   addCollectionAndDocuments('categories', SHOP_DATA);
  // },[]);

  return (
    <CategoryContext.Provider value={categoryState}>
      {children}
    </CategoryContext.Provider>
  );
};
