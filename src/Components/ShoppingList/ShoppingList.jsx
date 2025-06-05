import { useState } from "react";
import Header from "../Header/Header";
import InputItem from "../InputItem/InputItem";
import ItemList from "../ItemList/ItemList";
import "./ShoppingList.css";
import { v4 as uuidv4 } from "uuid";
import { showError } from "../../utils/showToast";

export default function ShoppingList() {
  const [shoppingItems, setShoppingItems] = useState([]);

  function addItem(name) {
    setShoppingItems([
      ...shoppingItems,
      {
        name,
        id: uuidv4(),
        quantity: 1,
      },
    ]);
  }

  function handleAddQuantity(id) {
    const updatedItem = shoppingItems.map((item) => {
      if (item.id == id) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      }
      return item;
    });
    setShoppingItems(updatedItem)
  }

   function handleMinusQuantity(id) {
    const updatedItem = shoppingItems.map((item) => {
      if (item.id == id && item.quantity > 1) {
        return {
          ...item,
          quantity: item.quantity == 0 ? item.quantity : item.quantity -1 ,
        };
      }
      else if(item.id == id && item.quantity == 1) {
        showError(`${item.name} removed`)
        return null;
      }
      return item;
    }).filter(Boolean);
        setShoppingItems(updatedItem) 
  }
  return (
    <>
      <Header />
      <div className="shopping-list">
        <InputItem addItem={addItem}/>
        <ItemList items={shoppingItems}  handleAddQuantity={handleAddQuantity} handleMinusQuantity={handleMinusQuantity}/>
      </div>
    </>
  );
}
