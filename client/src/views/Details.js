import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from '@reach/router';

const Details = (props) => {
  const [product, setProduct] = useState({})

  useEffect(() => {
    axios.get(`http://localhost:8000/api/products/${props.id}`)
      .then(res => {
        setProduct({ ...res.data });
        console.log("This is res.data:", res.data);
      })
      .catch(err => console.log(err))

  }, []);

  return (
    <div>
      <p>Product Name: {product.productName}</p>
      <p>Product price: {product.productPrice}</p>
      <p>Product Description: {product.productDesc}</p>
      <Link to={`/products/`}><button>Back</button></Link>
    </div>
  );
}

export default Details;

