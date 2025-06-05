import "./InputItem.css";
import "react-toastify/dist/ReactToastify.css";

import { showSucess } from "../../utils/showToast";
import { useState } from "react";
export default function InputItem({
  addItem
}) {
  const [itemName, setItemName] = useState("");

  const handleAddClick = () => {
    showSucess("Successfully Add Item... "); // Display success toast
    addItem(itemName); // Add the item
    setItemName(""); // Optionally clear input
  };

  return (
    <div className="input-item-wrapper">
      <input
        className="input-item"
        type="text"
        placeholder="Add Item..."
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
      />
      <button className="add-item-button" onClick={handleAddClick}>
        Add Item
      </button>
    </div>
  );
}
