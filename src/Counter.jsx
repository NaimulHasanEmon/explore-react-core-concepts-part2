import { useState } from "react"

export default function Counter() {
    const [count, setCount] = useState(0)
    const handleAdd = () => {
        setCount(count + 1)
    }

    const handleReduce = () => {
        setCount(count - 1)
    }
    return(
        <div style={{border: '5px solid rebeccapurple', borderRadius: '16px'}}>
            <h2>Counter: {count}</h2>
            <div>
                <button style={{marginRight: '5px'}} onClick={handleAdd}>Add</button>
                <button onClick={handleReduce}>Reduce</button>
            </div>
        </div>
    )
}