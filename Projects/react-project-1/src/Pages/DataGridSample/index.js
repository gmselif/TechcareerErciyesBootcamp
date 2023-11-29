import React, { useState } from 'react'
import axios from 'axios';
import { useQuery } from "react-query";
import { DataGrid } from '@mui/x-data-grid';
import { Box, Button, Container, Grid, TextField, Typography } from '@mui/material';

function DataGridSample() {
  const { data, status } = useQuery("products", getProducts);
  const [rows, setRows] = useState(data);

  const BASE_URL = "https://northwind.vercel.app/api/products"

  async function getProducts() {
    const res = await axios.get(BASE_URL);
    return res.data;
  }

  async function handleDelete(id) {
    await axios.delete(BASE_URL + `/${id}`).then(res => {
      console.log("Successfully Deleted")
      const newRows = rows.filter(product => product.id != id)
      setRows(newRows)
    }).catch(error => console.error(error));
  }

  const columns = [
    {
      field: 'id',
      headerName: 'ID',
      type: 'number',
      width: 150,
      headerAlign: 'center',
      align: 'center'
    },
    {
      field: 'name',
      headerName: 'Name',
      width: 400,
      headerAlign: 'left',
      align: 'left'
    },
    {
      field: 'unitPrice',
      headerName: 'Price',
      type: 'number',
      width: 200,
      headerAlign: 'left',
      align: 'left'
    },
    {
      field: 'unitsInStock',
      headerName: 'Stock',
      width: 200,
      headerAlign: 'left',
      align: 'left'
    },
    {
      field: 'delete',
      headerName: 'Delete',
      width: 150,
      headerAlign: 'center',
      align: 'center',
      sortable: false,
      renderCell: (params) => {
        return <Button  variant="contained" color="secondary" onClick={() => { handleDelete(params.row.id) }}>Delete</Button>
      }
    }

  ];

  const [name, SetName] = useState("")
  const [price, SetPrice] = useState("")
  const [stock, SetStock] = useState("")

  const nameHandleChange = (e) => {
    SetName(e.target.value)
  }
  const priceHandleChange = (e) => {
    SetPrice(e.target.value)
  }
  const stockHandleChange = (e) => {
    SetStock(e.target.value)
  }

  const postProduct = (product) => {
    axios.post(BASE_URL, product).then(res => console.log("Successfully added a new product"))
  }

  const handleAdd = () => {
    //isNaN(price) || isNaN(stock) && alert("Please give a number ") 
    var maxId = Math.max(...rows.map(row => row.id))
    const newObject = {
      id: (maxId + 1),
      name: name,
      unitPrice: Number(price),
      unitsInStock: Number(stock)
    }
    setRows([...rows, newObject])
    postProduct(newObject)
  }


  return (
    <>
      {status === "error" && <p>Error fetching data</p>}
      {status === "loading" && <p>Fetching data...</p>}
      {status === "success" && (
        <Box>
          <Container maxWidth="lg" style={{ marginTop: "8rem" }}>
            <Grid container spacing={2} style={{ textAlign: "center", alignItems: "center" }}>
              <Grid item xs={3}>
                <TextField
                  id="outlined-basic"
                  label="Name"
                  variant="outlined"
                  value={name}
                  onChange={nameHandleChange}
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  id="outlined-basic"
                  label="Price"
                  variant="outlined"
                  value={price}
                  onChange={priceHandleChange}
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  id="outlined-basic"
                  label="Stock"
                  variant="outlined"
                  value={stock}
                  onChange={stockHandleChange}
                />
              </Grid>
              <Grid item xs={3}>
                <Button variant="contained" color="secondary" size="large" onClick={handleAdd}>Add</Button>
              </Grid>

              <Grid item xs={12}>
                <DataGrid
                  rows={rows ? rows : setRows(data)}
                  columns={columns}
                  initialState={{
                    pagination: {
                      paginationModel: {
                        pageSize: 5,
                      },
                    },
                  }}
                  pageSizeOptions={[5]}
                />
              </Grid>
            </Grid>
          </Container>
        </Box>
      )}
    </>
  )
}

export default DataGridSample