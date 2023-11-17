import React from 'react'
import SuppliersData from "../../Data";

function Suppliers() {
  return (
    <div>
      {
        SuppliersData.map((item, key) => {
          <li key={key}>item.companyName</li>
        })
      }
    </div>
  )
}

export default Suppliers