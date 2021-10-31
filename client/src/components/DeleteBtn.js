import React from 'react'
import axios from 'axios';

const DeleteBtn = (props) => {
  const { id, successCallback } = props;

  const deleteProduct = e => {
    axios.delete(`http://localhost:8000/api/products/${id}`)
      .then(res => {
        successCallback();
      })
      .catch(err => console.log(err));
  }

  return (
    <button onClick={deleteProduct}>
      Delete
    </button>
  )
}
export default DeleteBtn;