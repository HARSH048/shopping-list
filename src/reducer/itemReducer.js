import { showError } from "../utils/showToast";
import { v4 as uuidv4 } from "uuid";

export default function itemReducer(shoppingItems, action) {
  if (action.type == "add_item") {
    return [
      ...shoppingItems,
      {
        name: action.name,
        id: uuidv4(),
        quantity: 1,
      },
    ];
  } else if (action.type == "increment_quantity") {
    return shoppingItems.map((item) => {
      if (item.id == action.id) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      }
      return item;
    });
  } else if (action.type == "decrement_quantity") {
    return shoppingItems
      .map((item) => {
        if (item.id == action.id && item.quantity > 1) {
          return {
            ...item,
            quantity: item.quantity == 0 ? item.quantity : item.quantity - 1,
          };
        } else if (item.id == action.id && item.quantity == 1) {
          showError(`${item.name} removed`);
          return null;
        }
        return item;
      })
      .filter(Boolean);
  }
}
