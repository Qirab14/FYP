import React, { Component, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./userHome.css"

export default function UserHome({ userData }) {
  const logOut = () => {
    window.localStorage.clear();
    window.location.href = "./sign-in";
  };
  return (
    <div>
              <header>
                <nav>
                  <ul>
                    <li><a href="#">Home</a></li>
                    <li><Link to="/generalProblem">Problems</Link></li>
                    <li><a href="#">Contests</a></li>
                    <li><Link to="/leaderboard">Leaderboard</Link></li>
                    <li><a href="#">Practice</a></li>
                    <li><Link to="/chatroom">Chat Room</Link></li>
                  </ul>
                 
                  <button onClick={logOut} >
            Log Out
          </button>
                </nav>
                <div className="header-content">
                  <h1>Join the Coding Revolution</h1>
                  <p>Learn to code with CodeUnity</p>
                  <button>Get Started</button>
                </div>
              </header>
              
              <main>
                <section className="featured-problems">
                  <h2>Featured Problems</h2>
                  <ul>
                    <li>
                    <Link to="/problem1">
                        <div className="problem-title">Problem 1</div>
                        <div className="problem-difficulty">Easy</div>
                        </Link>
                    </li>
                    <li>
                    <Link to="/problem2">
                        <div className="problem-title">Problem 2</div>
                        <div className="problem-difficulty">Medium</div>
                      </Link>
                    </li>
                    <li>
                      
                    <Link to="/problem3">
                        <div className="problem-title">Problem 3</div>
                        <div className="problem-difficulty">Hard</div>
                        </Link>
                    </li>
                  </ul>
                </section>
                
                <section className="practice-problems">
                  <h2>Practice Problems</h2>
                  <ul>
                    <li><Link to="/fproblem1">Problem 1</Link></li>
                    <li><Link to="/fproblem2">Problem 2</Link></li>
                    <li><Link to="/fproblem3">Problem 3</Link></li>
                    <li><Link to="/fproblem4">Problem 4</Link></li>
                    <li><Link to="/fproblem5">Problem 5</Link></li>
                  </ul>
                  <button>View More</button>
                </section>
              </main>
              
              

            </div>
  )
}
