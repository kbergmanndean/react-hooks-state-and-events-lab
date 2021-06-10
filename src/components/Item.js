import React, { useState } from "react";

function Item({ name, category, cart }) {

  const [inCart, setCart] = useState(false)

  function addToCart(){
    setCart((inCart) => !inCart)
  }

  return (
    <li className={ inCart ? "in-cart" : "" }>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={addToCart}>Add to Cart</button>
    </li>
  );
}

export default Item;
