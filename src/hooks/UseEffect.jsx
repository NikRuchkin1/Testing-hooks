import React from 'react'
import UseRef from './UseRef'
import UseState from './UseState'

function UseEffect() {
    const [visibleComponent, setVisibleComponent] = React.useState(true)
    const showComponent = () => {
      setVisibleComponent((visible)=>!visible)
    }
    React.useEffect(()=> {
        console.log('Component did update')
    }, [visibleComponent])
    React.useEffect(()=> {
        console.log('Component was created')
    }, [])
    return (
      <div className="App">
        {visibleComponent && <UseState/>}
        <div className='btn'>
        {visibleComponent?
        <button onClick={showComponent}>Hide list</button>
        :
        <button onClick={showComponent}>Show list</button>}</div>
        <UseRef/>
      </div>
    );
  }

export default UseEffect
