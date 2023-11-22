import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Axios1() {
  const [products, setProducts] = useState([]);
  const [length, setLength] = useState();
  const BASE_URL = "https://northwind.vercel.app/api/products";

  useEffect(() => {
    loadData(); 
  }, [])

  const loadData = () => {
    axios.get(BASE_URL).then(res => {
      setLength(res.data.length);
      setProducts(res.data);
    })
  }

  const handleDelete = (id) => {
    axios.delete(`${BASE_URL}/${id}`)
  }

  return (
    <div>
      <h1>{length}</h1>
      <table>
        <thead>
          <tr>
            <th>Product ID</th>
            <th>Name</th>
            <th>Unit Price</th>
            <th>Units In Stock</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {products.map(item => 
            <tr key={item.id}>
              <td><Link to={`/AxiosProducts/:${item.id}`}>{item.id}</Link></td>
              <td>{item.name}</td>
              <td>{item.unitPrice}</td>
              <td>{item.unitsInStock}</td>
              <td><button onClick={() => handleDelete(item.id)}>Delete</button></td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default Axios1