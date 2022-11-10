import React from 'react'


const [counter, setCounter] = useState(0);
const Counter = () => {

  return (
    <div className="counter">
      <h3>Counter:{counter}</h3>
    </div>
  )
}

export default Counter
