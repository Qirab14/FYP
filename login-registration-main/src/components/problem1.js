import React, { useState, useRef } from "react";
import axios from "axios";
import "./problem1.css";

function Problem1(props) {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const intervalRef = useRef(null);
  const [showMenu, setShowMenu] = useState(false);
  const [userAnswer, setUserAnswer] = useState("");
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);

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

  function handleAnswerChange(event) {
    setUserAnswer(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    axios
      .post("http://localhost:5000/problem1", { userAnswer })
      .then((response) => {
        const isAnswerCorrect = response.data.isAnswerCorrect;
        setIsAnswerCorrect(isAnswerCorrect);
        setShowMenu(true);
        stopTimer();
      })
      .catch((error) => {
        console.error("Error saving answer", error);
      });
  }

  function handleMenuClick() {
    setShowMenu(false);
    setIsAnswerCorrect(null);
    setHours(0);
    setMinutes(0);
    setSeconds(0);
    setUserAnswer("");
  }

  return (
    <body id="page12">
      <div className="container">
        <div className="header">
          <h1 className="title">Coding Problem</h1>
          <div className="buttons">
            <button onClick={startTimer}>Start</button>
          </div>
        </div>
        <h2>Timer: {hours}h {minutes}m {seconds}s</h2>
        {!showMenu ? (
          <div className="problem">
            <h2 className="subtitle">Write a function that returns the sum of two numbers</h2>
            <p className="description">
              Given two numbers, return their sum. You may assume that the input is always valid.
            </p>
          </div>
        ) : (
          <div className="menu">
            <h2>Result</h2>
            {isAnswerCorrect ? (
              <p>Congratulations! Your code is correct.</p>
            ) : (
              <p>Sorry, your code is incorrect.</p>
            )}
            <button onClick={handleMenuClick}>Close</button>
          </div>
        )}
        <div className="editor">
          <div className="editor-title">Output</div>
          <form onSubmit={handleSubmit}>
            <textarea 
             className="editor-textarea"
             placeholder="Write your result here..."
             value={userAnswer} onChange={handleAnswerChange}
              />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </body>
  );
}

export default Problem1;
