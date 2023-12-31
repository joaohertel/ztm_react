import { ProductCard } from "../product-card/product-card.component";
import {
  CategoryPreviewContainer,
  Title,
  Preview
} from "./category-preview.styles.jsx";

export const CategoryPreview = ({ title, products }) => {

  return (
    <CategoryPreviewContainer>
      <h2>
        <Title className="title" to={title}>{title.toUpperCase()}</Title>
      </h2>
      <Preview>
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
      </Preview>
    </CategoryPreviewContainer>
  );
};
