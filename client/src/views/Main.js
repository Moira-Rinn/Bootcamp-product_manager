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
  }, []);


  const createProduct = product => {
    axios.post('http://localhost:8000/api/products', product)
      .then(res => {
        setProductList([...productList, res.data])
      })
      .catch(err => console.log("this is the...", err));
  }

  const removeFromDom = id => {
    setProductList(productList.filter(product => product._id !== id));
  }

  return (
    <div>
      <ProductForm
        onSubmitProp={createProduct}
        initialProductName={""}
        initialProductPrice={""}
        initialProductDesc={""}
      />

      {
        loaded && <ProductList
          list={productList}
          removeFromDom={removeFromDom}
        />
      }
    </div>
  )
}

export default Main;