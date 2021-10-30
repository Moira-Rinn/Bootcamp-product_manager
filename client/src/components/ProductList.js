import React from 'react';
import { Link } from '@reach/router';

const ProductList = (props) => {
  const { list } = props;

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
              onClick={() => props.deleteProduct(product._id)}>Delete
            </button>
          </li>
        })}
      </ul>
    </div>
  )
}
export default ProductList;