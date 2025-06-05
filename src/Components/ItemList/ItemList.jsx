import Item from "../Item/Item";
import "./ItemList.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";

export default function ItemList({
  items,
  handleAddQuantity,
  handleMinusQuantity,
}) {
  return (
    <div className="item-list-wrapper">
      {items &&
        items.map((item) => (
          <div className="item-list" key={item.id}>
            <Item name={item.name} quantity={item.quantity} />
            <FontAwesomeIcon
              icon={faPlus}
              className="change-quantity add-quantity"
              onClick={()=>(handleAddQuantity(item.id))}
            />
            <FontAwesomeIcon
              icon={faMinus}
              className="change-quantity remove-quantity"
              onClick={()=>(handleMinusQuantity(item.id))}
            />
          </div>
        ))}
    </div>
  );
}
