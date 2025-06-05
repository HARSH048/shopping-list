import Header from "../Header/Header";
import InputItem from "../InputItem/InputItem";
import ItemList from "../ItemList/ItemList";
import "./ShoppingList.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const items = [
  {
    id: 1,
    name: "Apple",
    quantity: 2
  },
  {
    id: 2,
    name: "Banana",
    quantity: 1
  }
]
export default function ShoppingList() {
  return (
    <>
      <Header />
      <div className="shopping-list">
         <InputItem />
         <ItemList items={items}/>
      </div>
     
    </>
  );
}
