import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let time = new Date().toLocaleTimeString()

  const [currentTime, setCurrentTime] = useState(time)

  const updateTime = () => {
    let time = new Date().toLocaleTimeString()
    setCurrentTime(time)
  }
  setInterval(updateTime, 1000)
  return (
    <div style={{
      margin: "15%",
      padding: "5%",
      background: "#200506",
      color: "#fff",
      display: "grid",
      justifyContent: "center",
      border: "2px solid #ff5912"
    }}>
      <h1>Digital Clock</h1>
      <h2>{currentTime}</h2>
      {/* <button onClick={updateTime}>Get Time</button> */}
    </div>
  );
}

export default App;
