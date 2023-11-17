import React from 'react'
import { useParams } from 'react-router-dom'
import products from "../../Data";

function ProductDetail() {
  const { id } = useParams();

  var product = products?.find(q => q.id == id.substring(1));
  return (
    <div style={{margin: "50px"}}>
      <h1>Product Detail</h1>
      <table style={{textAlign: "left"}}>
        <tr>
          <th>ID</th>
          <td>{product.id}</td>
        </tr>
        <tr>
          <th>Name</th>
          <td>{product.name}</td>
        </tr>
        <tr>
          <th>Supplier ID</th>
          <td>{product.supplierId}</td>
        </tr>
        <tr>
          <th>Category ID</th>
          <td>{product.categoryId}</td>
        </tr>
        <tr>
          <th>Quantity Per Unit</th>
          <td>{product.quantityPerUnit}</td>
        </tr>
        <tr>
          <th>Unit Price</th>
          <td>{product.unitPrice}</td>
        </tr>
        <tr>
          <th>Discontinued</th>
          <td>{product.discontinued}</td>
        </tr>
        <tr>
          <th>units In Stock</th>
          <td>{product.unitsInStock}</td>
        </tr>
        <tr>
          <th>units On Order</th>
          <td>{product.unitsOnOrder}</td>
        </tr>
        <tr>
          <th>Reorder Level</th>
          <td>{product.reorderLevel}</td>
        </tr>
      </table>
    </div>
  )
}

export default ProductDetail