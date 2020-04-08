import React from "react";

function Item({ item }) {
  return (
    <div>
      <img src={item.thumbnail_url} alt={item.title} />
      <h1>{item.title}</h1>
      <p>{item.price}</p>
      <button>Add to cart</button>
    </div>
  );
}

export default Item;
