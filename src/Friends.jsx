import { useEffect, useState } from "react"
import Friend from "./Friend"

export default function Friends() {
    const [friend, setFriend] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(friend => setFriend(friend))
    }, [])
    return(
        <div style={{border: '5px solid skyblue', borderRadius: '16px'}}>
            <h2>Friends: {friend.length}</h2>
            {
                friend.map(f => <Friend key={f.id} friend={f}></Friend>)
            }
        </div>
    )
}