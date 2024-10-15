import React, {useState} from 'react'

function Counter() {

    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(count + 1)
        // setCount((lastValue) => lastValue + 1)
    }

    const decrement = () => {
        setCount(count-1)
    }

    return (
        <div>
            <button onClick={decrement}>decrement</button>
            <h1>Count: {count}</h1>
            <button onClick={increment}>increment</button>
        </div>
    )
}

export default Counter