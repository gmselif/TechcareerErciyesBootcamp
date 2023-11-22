import axios from 'axios'
import React, { useEffect, useState } from 'react'

function AxiosUsers() {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [selected, setSelected] = useState("");

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then(res => {
      setUsers(res.data);
    })

    axios.get("https://jsonplaceholder.typicode.com/posts").then(res => {
      setPosts(res.data);
    })
  }, [])

  const handleChange = (e) => {
    setSelected(posts.find(item => item.userId == e.target.value))
  }

  const style = {
    border: "1px solid black",
  }
  return (
    <>
      {users ? (
        <div>
          <div>
            <h1>AxiosUsers</h1>
            <select name="users" id="users" onChange={e => handleChange(e)}>
              {users.map(item =>
                <option value={item.id} key={item.id}>{item.name}</option>
              )}
            </select>
          </div>
          {selected ? (
            <table style={{marginTop: "50px"}}>
              <thead>
                <tr>
                  <th style={style}>User ID</th>
                  <th style={style}>ID</th>
                  <th style={style}>Title</th>
                  <th style={style}>Body</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={style}>{selected.userId}</td>
                  <td style={style}>{selected.id}</td>
                  <td style={style}>{selected.title}</td>
                  <td style={style}>{selected.body}</td>
                </tr>
              </tbody>
            </table>
          ) : null}
        </div >
      ) : null}
    </>
  )
}

export default AxiosUsers