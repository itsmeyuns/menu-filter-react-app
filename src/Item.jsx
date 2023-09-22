import React from "react";

function Item({ id, img, title, desc, price }) {
  return (
    <div className="item" key={id}>
      <img src={img} alt={title} width="150px" />
      <div className="item-info">
        <div className="item-header">
          <h2>{title}</h2>
          <span>{price}$</span>
        </div>
        <p className="item-text">{desc}</p>
      </div>
    </div>
  );
}

export default Item;
