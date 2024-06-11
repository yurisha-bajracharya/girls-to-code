import React, { useState } from 'react'

function Task() {
    const [count, setCount] = useState(0);
    const [buttonClicked, setbuttonClicked] = useState(false);
    const increase = () => {
        setCount(count + 1);
        setbuttonClicked(true);
    }
    const decrease = () => {
      setCount(count - 1);
      setbuttonClicked(true);
    }
  return (
    <div>
        <button onClick={increase}>Increment</button><br />
        <button onClick={decrease}>Decrement</button>
        <h2>Count: {count}</h2>
        {buttonClicked?<i>Button Clicked</i>:<p></p>}
    </div>
  )
}

export default Task