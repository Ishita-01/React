import React,{useState} from "react";

function App() {
    setInterval(current,1000)
    const [time,currentTime]=useState("")
    function current(){
      currentTime(new Date().toLocaleTimeString())
    }
  return (
    <div className="container">
      <h1>{time}</h1>
    </div>
  );
}

export default App;
