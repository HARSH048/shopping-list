import Item from "../Item/Item";
import "./ItemList.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { shoppingItemsContext,dispatchContext } from "../../context/shoppingContext";

export default function ItemList() {
  const dispatch = useContext(dispatchContext);
  const shoppingItems = useContext(shoppingItemsContext);
  return (
    <div className="item-list-wrapper">
      {shoppingItems &&
        shoppingItems.map((item) => (
          <div className="item-list" key={item.id}>
            <Item name={item.name} quantity={item.quantity} />
            <FontAwesomeIcon
              icon={faPlus}
              className="change-quantity add-quantity"
              onClick={() =>
                dispatch({
                  id: item.id,
                  type: "increment_quantity",
                })
              }
            />
            <FontAwesomeIcon
              icon={faMinus}
              className="change-quantity remove-quantity"
              onClick={() =>
                dispatch({
                  id: item.id,
                  type: "decrement_quantity",
                })
              }
            />
          </div>
        ))}
    </div>
  );
}
