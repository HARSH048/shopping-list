import { useReducer } from "react";
import Header from "../Header/Header";
import InputItem from "../InputItem/InputItem";
import ItemList from "../ItemList/ItemList";
import "./ShoppingList.css";
import itemReducer from "../../reducer/itemReducer";
import {
  dispatchContext,
  shoppingItemsContext,
} from "../../context/shoppingContext";

export default function ShoppingList() {
  const [shoppingItems, dispatch] = useReducer(itemReducer, []);
  return (
    <>
      <Header />
      <shoppingItemsContext.Provider value={shoppingItems}>
        <dispatchContext.Provider value={dispatch}>
          <div className="shopping-list">
            <InputItem/>
            <ItemList/>
          </div>
        </dispatchContext.Provider>
      </shoppingItemsContext.Provider>
    </>
  );
}
