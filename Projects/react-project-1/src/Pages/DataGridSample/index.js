import React, { useState } from 'react'
import axios from 'axios';
import { useQuery } from "react-query";

import { DataGrid } from '@mui/x-data-grid';
import { Box, Container, Stack, Button } from '@mui/material';

function DataGridSample() {
  const { data, status } = useQuery("products", getProducts);
  const [rows, setRows] = useState(data);

  const BASE_URL = "https://northwind.vercel.app/api/products/"

  async function getProducts() {
    const res = await axios.get(BASE_URL);
    return res.data;
  }

  async function handleDelete(id) {
    await axios.delete(BASE_URL + `${id}`).then(res => {
      console.log("Successfully Deleted")
      const responce = axios.get(BASE_URL)
      setRows(responce.data)
      console.log(rows)
    })
  }

  const columns = [
    {
      field: 'id',
      headerName: 'ID',
      type: 'number',
      width: 90
    },
    {
      field: 'name',
      headerName: 'Name',
      width: 150,
      editable: true,
    },
    {
      field: 'unitPrice',
      headerName: 'Price',
      type: 'number',
      width: 150,
      editable: true,
    },
    {
      field: 'unitsInStock',
      headerName: 'City',
      width: 150,
      editable: true,
    },
    {
      field: 'delete',
      headerName: 'Delete',
      sortable: false,
      width: 150,
      renderCell: (params) => {
        return <button onClick={() => { handleDelete(params.row.id) }}>Delete</button>
      }
    }

  ];

  return (
    <>
      {status === "error" && <p>Error fetching data</p>}
      {status === "loading" && <p>Fetching data...</p>}
      {status === "success" && (
        <Container maxWidth="lg" style={{ marginTop: "8rem" }}>
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
          />
        </Container>
      )}
    </>
  )
}

export default DataGridSample