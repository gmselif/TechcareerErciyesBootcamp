import React, {useState} from 'react'

function State() {
  var [counter, setCounter] = useState(200 + "px");
  var [randNumbers, SetRandNumbers] = useState([]);

  const handleIncrese = () => {
    var number = Number(counter.slice(0, counter.indexOf("p")));
    number = number + 100;
    setCounter(number + "px")
  }

  const handleAddRandom = () => {
    var rand = Math.floor(Math.random() * 99 + 1);
    if (!randNumbers.includes(rand)) {
      SetRandNumbers([...randNumbers, rand]);
    }
  }

  return (
    <div>
      <div>
        <button onClick={handleIncrese}>Increase</button>
        <div style={{ width: counter, height: counter, backgroundColor: "black" }}></div>
      </div>
      <div>
        <button onClick={handleAddRandom}>Add Random</button>
        <ul>
          {randNumbers.map((item, key) => {
            return <li key={key}>{item}</li>
          })}
        </ul>
      </div>
    </div>
  )
}

export default State