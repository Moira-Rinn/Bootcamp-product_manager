import React, { useEffect, useState } from 'react'
import axios from 'axios';
const ProductForm = () => {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productDesc, setProductDesc] = useState("");

  const onSubmitHandler = e => {

    e.preventDefault();

    axios.post('http://localhost:8000/api/products', {
      productName,
      productPrice,
      productDesc
    })
      .then(res => console.log(res))
      .catch(err => console.log("this is the...", err));
  }

  return (
    <div>
      <h1>New Product:</h1>
      <form onSubmit={onSubmitHandler}>
        <p>
          <label>Product Name</label><br />
          <input type="text" onChange={(e) => setProductName(e.target.value)} />
        </p>
        <p>
          <label>Product Price</label><br />
          <input type="text" onChange={(e) => setProductPrice(e.target.value)} />
        </p>
        <p>
          <label>Product Description</label><br />
          <input type="text" onChange={(e) => setProductDesc(e.target.value)} />
        </p>
        <input type="submit" value='Add Product' />
      </form>
    </div>
  )
}
export default ProductForm;