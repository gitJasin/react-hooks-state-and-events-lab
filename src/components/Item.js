import React, { useState } from "react";


function Item({ name, category }) {
  const [cartStatus, setCartStatus] = useState(false)
  
  const cartClass = cartStatus ? "in-cart" : ""
  const buttonClass = cartStatus ? "remove": "add"


  function handleCart() {
    setCartStatus(!cartStatus)
  }

  return (
    <li className={cartClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={buttonClass} onClick={handleCart}>{cartStatus ? "Remove from Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
