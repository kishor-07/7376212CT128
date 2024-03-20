import React from "react";

function ProductCard({ product }) {
  const { name, company, category, price, rating, discount, availability, image } = product;
  const uniqueProductId = `${name}-${company}-${category}`; // generate unique product identifier

  return (
    <div className="product-card">
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>{company}</p>
      <p>{category}</p>
      <p>{price}</p>
      <p>{rating}</p>
      <p>{discount}</p>
      <p>{availability}</p>
    </div>
  );
}

export default ProductCard;