import React from 'react'
import './App.css'

export default function App() {

  let [time, setTime] = React.useState('');
  let [back, setBack] = React.useState({});
  let even = {
    backgroundColor: "black",
    color: 'white',
    height: "100vh",
    width: "100%"
  };
  let odd = {
    backgroundColor: "white",
    color: 'black',
    height: "100vh",
    width: "100%"
  };
  React.useEffect(() => {
    let interval = setInterval(() => {
      let hour = new Date().getHours();
      let minutes = new Date().getMinutes();
      let seconds = new Date().getSeconds();
      let tempSec = seconds;
      //let tempHour = hour;
      if (seconds < 10) {
        seconds = "0" + seconds;
      }
      if (minutes < 10) {
        minutes = "0" + minutes;
      }
      if (hour < 10) {
        hour = "0" + hour;
      }
      if (hour > 12) {
        hour = hour - 12;

        // seconds = seconds + " " + "PM";
        setTime(hour + ":" + minutes + ":" + seconds + " " + "PM");
      }
      else {

        setTime(hour + ":" + minutes + ":" + seconds + " " + "AM");
      }


      if (tempSec % 2 === 0) {
        // console.log(back)
        setBack(even);
      }
      else setBack(odd)


      return () => {
        clearInterval(interval);
      }
    }, 1000);
  })
  return (
    <div style={back} className="container">
      <div className="clock">
        <h1>Clock</h1>
        <h1>{time}</h1>
      </div>
    </div>
  )
}
