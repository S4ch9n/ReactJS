import React from 'react'

const ProductInfo = () => {
  const products = {
    name : 'Laptop',
    price : 1200,
    availability : "In-stock",
  };
  return (
    <div>
      <h1>Name : {products.name}</h1>
      <h1>Price : ${products.price}</h1>
      <h1>Availability : {products.availability}</h1>
    </div>
  )
}

export default ProductInfo