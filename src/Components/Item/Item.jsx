import "./Item.css"
export default function Item({ name, quantity }) {
  return (
    <div className="item-wrapper">
      <div className="item-name">{name}</div>
      <div className="item-quantity">{quantity}</div>
    </div>
  );
}
