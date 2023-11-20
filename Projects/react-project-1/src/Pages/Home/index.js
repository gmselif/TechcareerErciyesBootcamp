import React, { useState } from 'react'

function Home() {
  var [counter, setCounter] = useState(200 + "px");

  const handleIncrese = () => {
    var number = Number(counter.slice(0, counter.indexOf("p")));
    number = number + 100;
    setCounter(number + "px")
  }

  const handleAddRandom = () => {

  }

  return (
    <div>
      <div>
        <button onClick={handleIncrese}>Increase</button>
        <div style={{ width: counter, height: counter, backgroundColor: "black" }}></div>
      </div>
      <div>
        <button onClick={handleAddRandom}>Add Random</button>
        <ul></ul>
      </div>
    </div>
  )
}

export default Home