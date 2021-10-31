import React from 'react';
import { Link } from '@reach/router';
import axios from 'axios';

const ProductList = (props) => {
  const { list, removeFromDom } = props;

  const handleDelete = (id) => {
    axios.delete(`http://localhost:8000/api/products/${id}`)
      .then(res => removeFromDom(id))
      .catch(err => console.log(err));
  }

  return (
    <div>
      <h2>Product List:</h2>
      <ul>

        {list.map((product, idx) => {
          return <li key={idx}>
            <p>ID: <Link to={`/products/${product._id}`}>{product._id}</Link></p>
            <p>Product Name: <Link to={`/products/${product._id}`}>{product.productName}</Link></p>
            <button
              // className='btn btn-sm btn-light btn-outline-dark'
              value={product._id}
              onClick={() => handleDelete(product._id)}>Delete
            </button>
            <Link to={`/products/${product._id}/edit`}>
              <button> Edit </button>
            </Link>
          </li>
        })}

      </ul>
    </div>
  )
}
export default ProductList;