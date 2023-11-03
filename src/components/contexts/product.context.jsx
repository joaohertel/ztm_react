import { createContext, useState } from 'react'
import PRODUCT_DATA from '../shop-data.json'

export const ProductContext = createContext(PRODUCT_DATA);

export const ProductProvider = ({ children }) => {

  const [products, setProducts] = useState(PRODUCT_DATA);
  const productState = { products, setProducts };

  return ( <ProductContext.Provider value={productState}>
    { children }
  </ProductContext.Provider>
  )
}