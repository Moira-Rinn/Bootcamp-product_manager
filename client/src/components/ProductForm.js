import React, { useState } from 'react'

const ProductForm = (props) => {
  const { initialProductName, initialProductPrice, initialProductDesc, onSubmitProp } = props;
  const [productName, setProductName] = useState(initialProductName);
  const [productPrice, setProductPrice] = useState(initialProductPrice);
  const [productDesc, setProductDesc] = useState(initialProductDesc);

  const onSubmitHandler = e => {
    e.preventDefault();
    onSubmitProp({ productName, productPrice, productDesc });
    setProductName(initialProductName);
    setProductPrice(initialProductPrice);
    setProductDesc(initialProductDesc);
  }

  return (
    <div>
      <h1>New Product:</h1>
      <form onSubmit={onSubmitHandler}>

        <p>
          <label>Product Name</label><br />
          <input type="text"
            name="productName"
            value={productName}
            onChange={(e) => { setProductName(e.target.value) }} />
        </p>

        <p>
          <label>Product Price</label><br />
          <input type="text"
            name="productPrice"
            value={productPrice}
            onChange={(e) => { setProductPrice(e.target.value) }} />
        </p>

        <p>
          <label>Product Description</label><br />
          <input type="text"
            name="productDesc"
            value={productDesc}
            onChange={(e) => { setProductDesc(e.target.value) }} />
        </p>
        <input type="submit" value='Submit' />
      </form>
    </div>
  )
}
export default ProductForm;