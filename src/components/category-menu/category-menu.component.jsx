import { DirectoryItemContainer } from './category-menu.styles.jsx'
import DirectoryItem from '../directory-item/directory-item.component';

const CategoryMenu = ({categories}) => {

  return (
    <DirectoryItemContainer>
      {categories.map((category) => {
        return (
            <DirectoryItem key={category.id} directoryItem={category} />
        );
      })}
    </DirectoryItemContainer>
  )
}

export default CategoryMenu;