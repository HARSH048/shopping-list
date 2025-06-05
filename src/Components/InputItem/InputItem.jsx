import "./InputItem.css";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";
import { showSucess } from "../../utils/showToast";
import { useContext } from "react";
import { dispatchContext } from "../../context/shoppingContext";
export default function InputItem() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    reset
  } = useForm();

  const dispatch  = useContext(dispatchContext)

  const handleAddClick = () => {
    showSucess("Successfully Add Item... "); // Display success toast
    dispatch({
      name: getValues("item"),
      type: "add_item",
    }) // Add the item
    reset({
      data: "item"
    })
  };

  return (
    <div className="input-item-wrapper">
      <form onSubmit={handleSubmit(handleAddClick)}>
        <div className="input-row">
          <div className="input-with-error">
            <input
              className={`input-item ${errors.item ? "error" : ""}`}
              type="text"
              placeholder="Add Item..."
              {...register("item", { required: true, minLength: 3 })}
            />
            {errors.item?.type === "required" && (
              <span className="errorMsg">Item name is required.</span>
            )}
            {errors.item?.type === "minLength" && (
              <span className="errorMsg">
                Name should be at least 3 characters long.
              </span>
            )}
          </div>
          <button className="add-item-button" type="submit">
            Add Item
          </button>
        </div>
      </form>
    </div>
  );
}
