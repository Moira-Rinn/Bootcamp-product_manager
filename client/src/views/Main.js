import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';

const Main = () => {
  const [productList, setProductList] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:8000/api/products")
      .then(res => {
        setProductList(res.data.theProducts);
        setLoaded(true);
      })
      .catch(err => console.log(err));
  }, [productList]);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:8000/api/products/${id}`)
      .then(res => console.log("item deleted."))
      .catch(err => console.log(err));
  }

  return (
    <div>
      <ProductForm />
      {loaded && <ProductList list={productList} deleteProduct={handleDelete} />}
    </div>
  )
}

export default Main;