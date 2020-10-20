import React from 'react';

function UseState() {
  const [numbers, setNumbers] = React.useState([1,2,3])
  const addNumber = () => {
    const randNumber =Math.round(Math.random() * 10)
    setNumbers([...numbers, randNumber]);
  }
  const deleteLastNumber = () => {
    const newNumbers = numbers.slice(numbers, numbers.length-1)
    setNumbers([...newNumbers]);
  }
  const deleteAllNumber = () => {
    const newNumbers = []
    setNumbers([...newNumbers]);
  }

  React.useEffect(() => {

  }, []);

  return (
    <div className="App">
        <ul>
          {numbers.map((u, index) => <li key={index}>{u}</li>)}
        </ul>
        <div className='btn'>
            <button onClick={addNumber}>New number</button>
            <button onClick={deleteLastNumber}>Delete last number</button>
            <button onClick={deleteAllNumber}>Delete all number</button>
        </div>
    </div>
  );
}

export default UseState;
