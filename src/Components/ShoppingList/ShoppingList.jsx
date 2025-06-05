import { useReducer } from "react";
import Header from "../Header/Header";
import InputItem from "../InputItem/InputItem";
import ItemList from "../ItemList/ItemList";
import "./ShoppingList.css";
import itemReducer from "../../reducer/itemReducer";

export default function ShoppingList() {
  const [shoppingItems, dispatch] = useReducer(itemReducer, []);

  function addItem(name) {
    dispatch({
      type: "add_item",
      name,
    });
  }

  function handleAddQuantity(id) {
    dispatch({
      type: "increment_quantity",
      id,
    });
  }

  function handleMinusQuantity(id) {
    dispatch({
      type: "decrement_quantity",
      id,
    });
  }
  return (
    <>
      <Header />
      <div className="shopping-list">
        <InputItem addItem={addItem} />
        <ItemList
          items={shoppingItems}
          handleAddQuantity={handleAddQuantity}
          handleMinusQuantity={handleMinusQuantity}
        />
      </div>
    </>
  );
}
