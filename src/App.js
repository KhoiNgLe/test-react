import { useState } from "react";
import "./App.css";
import Title from "./Title.js"

function App() {
  const [showEvents, setShowEvents] = useState(true);
  const [name, setName] = useState("Mario");

  const [events, setEvents] = useState([
    { title: "hello world", id: 1 },
    { title: "day 1", id: 2 },
    { title: "day 2", id: 3 },
  ]);

  const handleClick = (id) => {
    setEvents((prevEvents) => {
      return prevEvents.filter((event) => {
        return id !== event.id;
      });
    });
    console.log(id);
  };

  console.log(showEvents);


const subtitle = "All the lastes events in Marioland"

  return (
    <div className="App">
      <Title title = "Events in Your Area" subtitle = {subtitle}/>
      <Title title = "another title" subtitle = "Another subtitle"/>
      {showEvents && (
        <div>
          <button onClick={() => setShowEvents(false)}>hide events</button>
        </div>
      )}
      {!showEvents && (
        <div>
          <button onClick={() => setShowEvents(true)}>show events</button>
        </div>
      )}
      <h1>My name is {name}</h1>
      <button onClick={handleClick}>Change name</button>
      {showEvents &&
        events.map((event, index) => (
          <div key={event.id}>
            <h2>
              {index} - {event.title}
            </h2>
            <button onClick={() => handleClick(event.id)}>Delete Event</button>
          </div>
        ))}
    </div>
  );
}

export default App;
