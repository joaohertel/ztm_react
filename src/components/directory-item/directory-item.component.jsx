import { useNavigate } from 'react-router-dom';
import 
{
  DirectoryContainer,
  BackgroundImage,
  BodyContainer
}
from './directory-item.styles.jsx';




const DirectoryItem = ({directoryItem}) => {
  const { title, imageUrl, route } = directoryItem;
  const navigate = useNavigate();
  
  const handleDirectoryClick = () => {
    navigate(route);
  };

  return (
    <DirectoryContainer>
            <BackgroundImage 
              imageurl={imageUrl}              
              />
            <BodyContainer onClick={handleDirectoryClick}>
              <h2>{title}</h2>
              <p>Shop Now</p>
            </BodyContainer>
          </DirectoryContainer>
  )
}

export default DirectoryItem;