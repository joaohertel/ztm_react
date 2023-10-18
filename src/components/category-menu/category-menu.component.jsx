import './category-menu.styles.scss'
import CategoryItem from '../category-item/category-item.component';

const CategoryMenu = ({categories}) => {

  return (
    <div className="categories-container">
      {categories.map((category) => {
        return (
            <CategoryItem key={category.id} categoryItem={category} />
        );
      })}
    </div>
  )
}

export default CategoryMenu;