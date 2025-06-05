import "./InputItem.css"
export default function InputItem() {
    return (
        <div className="input-item-wrapper">
            <input className="input-item" type="text" placeholder="Add Item..."/>
            <button className="add-item-button">Add Item</button>
        </div>
    )
}