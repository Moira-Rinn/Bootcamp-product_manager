import React from 'react';
import { Link } from '@reach/router';
import DeleteBtn from './DeleteBtn';

const ProductList = (props) => {
  const { list, removeFromDom } = props;

  return (
    <div>
      <h2>Product List:</h2>
      <ul>

        {list.map((product, idx) => {
          return (
            <li key={idx}>
              <p>ID: <Link to={`/products/${product._id}`}>{product._id}</Link></p>
              <p>Product Name: <Link to={`/products/${product._id}`}>{product.productName}</Link></p>
              <DeleteBtn id={product._id} successCallback={() => removeFromDom(product._id)} />
              <Link to={`/products/${product._id}/edit`}>
                <button> Edit </button>
              </Link>
            </li>
          )
        })}

      </ul>
    </div>
  )
}
export default ProductList;