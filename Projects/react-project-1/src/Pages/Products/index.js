import React, { useState } from 'react'
import { Link } from "react-router-dom";
import products from "../../Data";

function Products() {
  const [data, setData] = useState(products);

  const handleCriticStock = () => {
    var result = products.filter(item => Number(item.unitsInStock) < 5)
    setData(result)
  }
  const handleShowAll = () => {
    setData(products)
  }
  const handleShowCheap = () => {
    var result = products.filter(item => Number(item.unitPrice) < 20)
    setData(result)
  }
  const handleShowExpensive = () => {
    var result = products.filter(item => Number(item.unitPrice) > 70)
    setData(result)
  }

  return (
    <div style={{ margin: "50px" }}>
      <h1>Products</h1>
      <button onClick={handleCriticStock}>Show Critical Stock</button>
      <button onClick={() => handleShowAll()}>Show All</button>
      <button onClick={() => handleShowCheap()}>Show Cheap</button>
      <button onClick={() => handleShowExpensive()}>Show Expensive</button>

      <table style={{ width: "50%" }}>
        <thead>
          <tr style={{ textAlign: "left" }}>
            <th>Product ID</th>
            <th>Product Name</th>
            <th>Unit Price</th>
            <th>Units In Stock</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((item, key) => {
              return (
                <tr key={key}>
                  <td>
                    <Link to={`/Products/:${item.id}`} style={{ textDecoration: "none", color: "#000" }}>
                      {item.id}
                    </Link>
                  </td>
                  <td>{item.name}</td>
                  <td>{item.unitPrice}</td>
                  <td>{item.unitsInStock}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default Products