import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [items, setItems] = useState(itemData);
  const [mode, setMode] = useState(true)
  const [selectedCategory, setCategory] = useState("All")

  function toggle(){
    if (mode===true) {
    setMode(false);}
    else {setMode(true)}
  }
  // this data will be passed down to the ShoppingList as a prop
  console.log(items);

  const displayItems = () => {
    if(selectedCategory === "All"){
       return items
    } else {
      return items.filter(it => it.category === selectedCategory)
    }
  }

  return (
    <div className={"App " + (mode? "light" : "dark")}>
      <header>
        <h2>Shopster</h2>
        <button onClick={toggle}>Dark Mode</button>
      </header>
      <ShoppingList 
      items={displayItems()} 
      selectedCategory={selectedCategory}
      setCategory={setCategory}/>
    </div>
  );
}

export default App;
