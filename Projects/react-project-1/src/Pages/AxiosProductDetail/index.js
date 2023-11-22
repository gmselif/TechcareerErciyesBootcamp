import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';

function AxiosProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    axios.get("https://northwind.vercel.app/api/products").then(res => {
      setProduct(res.data.find(item => item.id == id.substring(1)))
    })
  }, [])

  return (
    <>
      {product ? (
        <div>
          <h1>Axios Product Detail</h1>
          <h2>{product.id}</h2>
          <h2>{product.name}</h2>
          <h2>{product.unitPrice}</h2>
          <h2>{product.unitsInStock}</h2>
          <Link to="/AxiosProducts"><button>Go Back</button></Link>
        </div>
      ) : null}
    </>
  )
}

export default AxiosProductDetail