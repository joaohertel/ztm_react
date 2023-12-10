import { 
  ItemDetails,
  CardItemContainer
} from "./card-item.styles";

export const CardItem = ({ item }) => {

  const { name, imageUrl, price , quantity} = item;

  return (
    <CardItemContainer>
      <img src={imageUrl} alt={`${name}`}/>
      <ItemDetails>
        <span className="name">{name}</span>
        <span className="price">{quantity} x ${price}</span>
      </ItemDetails>
    </CardItemContainer>
  );
};
