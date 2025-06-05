import Item from "../Item/Item";
import "./ItemList.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";

export default function ItemList({ items }) {
  return (
    <div className="item-list-wrapper">
      {items &&
        items.map((item) => (
          <div className="item-list">
            <Item name={item.name} quantity={item.quantity} key={item.id} />
            <FontAwesomeIcon icon={faPlus} className="change-quantity add-quantity"/>
            <FontAwesomeIcon icon={faMinus} className="change-quantity remove-quantity"/>
          </div>
        ))}
    </div>
  );
}
