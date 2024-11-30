import './App.css'
import Counter from './Counter'
import Friends from './Friends'
import Members from './Members'
import Team from './Team'
import Users from './Users'

function App() {
  // function handleClick() {
  //   alert('Button clicked!');
  // }

  // const handleClick2 =() => {
  //   alert('Button clicked 2!');
  // }

  // const addFive = n => {
  //   alert( n + 5 )
  // }
  return (
    <>
      <h2>React Core Concepts 2</h2>
      <Friends></Friends>
      <Users></Users>
      <Counter></Counter>
      <Team></Team>
      <Members></Members>
      {/* <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click Me 2</button>
      <button onClick={() => {alert('Button clicked 3!')}}>Click Me 3</button>
      <button onClick={() => (addFive(5))}>Click Me 4</button> */}
    </>
  )
}

export default App