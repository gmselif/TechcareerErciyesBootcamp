import React from 'react'
import { Link } from "react-router-dom";
import products from "../../Data";

function Products() {
  return (
    <div style={{ margin: "50px" }}>
      <h1>Products</h1>
      <table>
        <thead>
          <tr style={{textAlign: "left"}}>
            <th>ID</th>
            <th>Name</th>
            <th>Unit Price</th>
            <th>Stock</th>
          </tr>
        </thead>
        <tbody>
          {
            products.map((item, key) => {
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