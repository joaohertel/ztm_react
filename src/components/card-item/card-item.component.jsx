import "./card-item.styles.scss";

export const CardItem = ({ item }) => {
  return (
    <div key={item.id}>
      <h2>{item.name}</h2>
      <span>{item.quantity}</span>
    </div>
  );
};
