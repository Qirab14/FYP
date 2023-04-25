import React, { useState, useRef } from "react";
import axios from "axios";
import "./problem1.css";

function Fproblem1(props) {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const intervalRef = useRef(null);
  const [showMenu, setShowMenu] = useState(false);
  const [text, setText] = useState('');

  function startTimer() {
    intervalRef.current = setInterval(() => {
      setSeconds((prevSeconds) => {
        if (prevSeconds === 59) {
          setMinutes((prevMinutes) => {
            if (prevMinutes === 59) {
              setHours((prevHours) => prevHours + 1);
              return 0;
            } else {
              return prevMinutes + 1;
            }
          });
          return 0;
        } else {
          return prevSeconds + 1;
        }
      });
    }, 1000);
  }

  function stopTimer() {
    clearInterval(intervalRef.current);
  }

  function handleChange(event) {
    setText(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(text);
    axios
      .post("http://localhost:9002/problem1", { text })
      .then((response) => {
        console.log("Text saved successfully");
        setShowMenu(true);
        stopTimer();
      })
      .catch((error) => {
        console.error("Error saving text", error);
      });
  }

  function handleMenuClick() {
    setShowMenu(false);
    setHours(0);
    setMinutes(0);
    setSeconds(0);
    setText("");
  }

  return (
    <body id="page12">
      <div className="container">
        <div className="header">
          <h1 className="title">Coding Problem</h1>
          <div className="buttons">
          <a
              href="https://www.programiz.com/python-programming/online-compiler/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button onClick={startTimer}>Start</button>
            </a>
          </div>
        </div>
        <h2>Timer: {hours}h {minutes}m {seconds}s</h2>
        {!showMenu ? (
          <div className="problem">
           <h2 className="subtitle">
            Write a Python program that calculates the area of a circle based on
            the radius entered by the user.
          </h2>
          <p className="description">
            Sample Output : r = 1.1, Area = 3.8013271108436504
          </p>
          </div>
        ) : (
          <div className="menu">
            <h2>Result</h2>
            <p>Congratulations! Your code is correct.</p>
            <button onClick={handleMenuClick}>Close</button>
          </div>
        )}
        <div className="editor">
          <div className="editor-title">Output</div>
          <form onSubmit={handleSubmit}>
            <textarea 
             className="editor-textarea"
             placeholder="Write your result here..."
             value={text} onChange={handleChange}
              />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </body>
  );
}

export default Fproblem1;
