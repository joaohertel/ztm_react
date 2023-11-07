import { Fragment, useContext } from "react";
import { CategoryContext } from "../../contexts/category.context";
import { ProductCard } from "../../product-card/product-card.component";
import "./shop.styles.scss";

export const Shop = () => {
  const context = useContext(CategoryContext);
  const { categoryMap } = context;
  const categoryTitles = Object.keys(categoryMap);

  if(categoryTitles){

    return (
      <Fragment>
        {categoryTitles.map((title)=> (
          <Fragment key={title}>
            <h2>{title}</h2>
            <div className="products-container">
              {categoryMap[title].map((product)=>(
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </Fragment>
        ))}
      </Fragment>
    )
      
              
      
    
  }else{
    return (<p>no data</p>);
  }

};
