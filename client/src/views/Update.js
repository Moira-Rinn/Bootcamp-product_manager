import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, navigate } from '@reach/router';
import ProductForm from '../components/ProductForm';
import DeleteBtn from '../components/DeleteBtn';

const Update = (props) => {
  const { id } = props;

  const [product, setProduct] = useState();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    axios.get(`http://localhost:8000/api/products/${id}`)
      .then(res => {
        setProduct(res.data);
        setLoaded(true);
      })
      .catch(err => console.log(err));
  }, [id]);

  const updateProduct = product => {
    axios.put(`http://localhost:8000/api/products/${id}`, product)
      .then(res => console.log(res))
      .catch(err => console.log(err));
    navigate(`/products/`);
  }

  return (
    <div>
      <h1>Update a Product</h1>

      {loaded && (
        <ProductForm
          onSubmitProp={updateProduct}
          initialProductName={product.productName}
          initialProductPrice={product.productPrice}
          initialProductDesc={product.productDesc} />
      )}

      <Link to={`/products/`}><button>Back</button></Link>
      <DeleteBtn id={id} successCallback={() => navigate(`/products`)} />
    </div>
  )
}

export default Update;
