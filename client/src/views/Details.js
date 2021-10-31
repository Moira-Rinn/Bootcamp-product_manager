import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, navigate } from '@reach/router';

const Details = (props) => {
  const { id } = props;
  const [product, setProduct] = useState({})

  useEffect(() => {
    axios.get(`http://localhost:8000/api/products/${id}`)
      .then(res => {
        setProduct({ ...res.data });
      })
      .catch(err => console.log(err))

  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:8000/api/products/${id}`)
      .then(res => console.log(`Product Deleted`))
      .catch(err => console.log(err));

    navigate(`/products`);
  }

  return (
    <div>
      <p>Product Name: {product.productName}</p>
      <p>Product price: {product.productPrice}</p>
      <p>Product Description: {product.productDesc}</p>
      <Link to={`/products/`}><button>Home</button></Link>
      <Link to={`/products/${id}/edit`}><button>Edit</button></Link>
      <button onClick={() => handleDelete(id)}>Delete</button>
    </div>
  );
}

export default Details;

