import { useState } from 'react'
import './App.css';

function App() {
  const[name, setName] = useState('Mario')

  const[events, setEvents] = useState([
    {title: "hello world", id: 1},
    {title: "day 1", id: 2},
    {title: "day 2", id: 3}
  ])


  const handleClick = () =>{
    setName("Louis")
    console.log(name)
  }

  return (
    <div className="App">
        <h1>My name is {name}</h1>
        <button onClick = {handleClick}>Change name</button>
        {events.map((event, index)=> (
          <div key = {event.id}>
            <h2>{index} - {event.title}</h2>
          </div>
        ))}

    </div>
  );
}

export default App;
