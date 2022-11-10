import React from 'react'


const Counter = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div className="counter">
      <h3>Counter:{counter}</h3>
    </div>
  )
}

export default Counter
