import "./card-item.styles.scss";

export const CardItem = ({ item }) => {

  const { name, imageUrl, price , quantity} = item;

  return (
    <div className="cart-item-container">
      <img src={imageUrl} alt={`${name}`}/>
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">{quantity} x ${price}</span>
      </div>
    </div>
  );
};
