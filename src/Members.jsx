import { useState } from "react"

export default function Members() {
    const [count, setCount] = useState(0)
    const handleAddMembers = () => {
        setCount(count + 1)
    }
    const handleReduceMembers = () => {
        setCount(count - 1)
    }
    return(
        <div style={{border: '5px solid green', borderRadius: '16px'}}>
            <h2>Members: {count}</h2>
            <button onClick={handleAddMembers}>Add</button>
            <button onClick={handleReduceMembers}>Reduce</button>
        </div>
    )
}