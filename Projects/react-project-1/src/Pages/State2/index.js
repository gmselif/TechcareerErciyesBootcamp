import React, { useState } from 'react'

function State2() {
  const [numbers, setNumbers] = useState([
    1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20
  ]);

  const handleRemoveNumber = () => {
    var rand = Math.floor(Math.random()*20);
    var newArr = [...numbers.slice(0, rand) , ...numbers.slice(rand+1)];  
    setNumbers(newArr);
    console.log(newArr)
  }

  const handleRemoveAll = () => {
    setNumbers([]);
  }

  return (
    <div>
      <button onClick={handleRemoveNumber}>Remove Random Number</button>
      <button onClick={handleRemoveAll}>Remove All</button>
      <ul>
        {numbers.map((item, key) => {
          return <li key={key}>{item}</li>
        })}
      </ul>
    </div>
  )
}

export default State2