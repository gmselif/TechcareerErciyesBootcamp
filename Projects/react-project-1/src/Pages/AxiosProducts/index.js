import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useQuery } from "react-query";

async function getProducts() {
  const res = await axios.get("https://northwind.vercel.app/api/products");
  return res.data;
}

function Axios1() {
  const [length, setLength] = useState();
  const BASE_URL = "https://northwind.vercel.app/api/products";

  const { data, status } = useQuery("products", getProducts);

  const handleDelete = (id) => {
    axios.delete(`${BASE_URL}/${id}`).then(res => {
      axios.get(BASE_URL)
    })
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
        {status === "error" && <p>Error fetching data</p>}
        {status === "loading" && <p>Fetching data...</p>}
        {status === "success" && (
          <tbody>
            {data.map(item =>
              <tr key={item.id}>
                <td><Link to={`/AxiosProducts/:${item.id}`}>{item.id}</Link></td>
                <td>{item.name}</td>
                <td>{item.unitPrice}</td>
                <td>{item.unitsInStock}</td>
                <td><button onClick={() => handleDelete(item.id)}>Delete</button></td>
              </tr>
            )}
          </tbody>
        )}
      </table>
    </div>
  )
}

export default Axios1