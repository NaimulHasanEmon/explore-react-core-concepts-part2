import { useState } from "react"

export default function Team() {
    const [count, setCount] = useState(11)
    const handleAdd = () => {
        setCount(count + 1)
    }
    const handleRemove = () => {
        setCount(count - 1)
    }
    return(
        <div style={{border: '5px solid orange', borderRadius: '16px'}}>
            <h2>Team Members: {count}</h2>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleRemove}>Remove</button>
        </div>
    )
}