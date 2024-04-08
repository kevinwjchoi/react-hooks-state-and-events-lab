import React, {useState} from "react";


function Item({ name, category }) {
  const [isAdded, setIsAdded] = useState(!false);

  function handleAdd(){
    setIsAdded((isAdded) => !isAdded);
    }
    

  return (
    <li className={isAdded ? "" : "in-cart"}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleAdd}>{isAdded ? "Add to Cart" : "Remove from Cart"}</button>
    </li>
  );
}

export default Item;
