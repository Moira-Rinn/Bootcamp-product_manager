import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, navigate } from '@reach/router';

const Update = (props) => {
  const { id } = props;
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productDesc, setProductDesc] = useState("");

  useEffect(() => {
    axios.get(`http://localhost:8000/api/products/${id}`)
      .then(res => {
        setProductName(res.data.productName);
        setProductPrice(res.data.productPrice);
        setProductDesc(res.data.productDesc);
      })
      .catch(err => console.log(err));
  }, [id]);


  const updateProduct = (e) => {

    e.preventDefault();

    axios.put(`http://localhost:8000/api/products/${id}`, {
      productName,
      productPrice,
      productDesc,
    })
      .then(res => console.log(res))
      .catch(err => console.log(err))

    navigate(`/products/`);
  }

  return (
    <div>
      <h1>Update a Product</h1>
      <form onSubmit={updateProduct}>

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
        <input type="submit" value='Edit Product' />
      </form>
      <Link to={`/products/`}><button>Back</button></Link>
    </div>
  )
}
export default Update;

