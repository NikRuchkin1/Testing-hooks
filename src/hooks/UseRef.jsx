import React from 'react'

function UseRef() {
  const [numbers, setNumbers] = React.useState([1,2,3])
  const ulRef = React.useRef()
  const timerRef =React.useRef()
  const addNumber = () => {
    setNumbers((prev) => [...prev, prev[prev.length-1] + 1]);
    removeScroll()
  }
  const start = ()=> {
    timerRef.current = setInterval(addNumber, 1000)
  }
  const stop = ()=> {
    clearInterval(timerRef.current)
}
  const handleScroll = () => {
      console.log('Был скролл!')
  }
  React.useEffect(() => {
    ulRef.current.addEventListener('scroll',handleScroll)
  }, [])
  const removeScroll = () => {
    ulRef.current.removeEventListener('scroll',handleScroll)
  }

  return (
    <div className="App">
        <ul ref={ulRef}>
          {numbers.map((u, index) => <li key={index}>{u}</li>)}
        </ul>
        <div className='btn'>
            <button onClick={addNumber}>Added number</button>
            <button onClick={start}>Start</button>
            <button onClick={stop}>Stop</button>
        </div>
    </div>
  );
}

export default UseRef;