import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Login from "./components/login_component";
import SignUp from "./components/signup_component";
import Chatroom from "./components/chatroom";
import Chat from "./components/chat";
import UserDetails from "./components/userDetails";
import Leaderboard from "./components/leaderboard";
import GeneralProblem from "./components/generalProblem";
import Problem1 from "./components/problem1";
import Problem2 from "./components/problem2";
import Problem3 from "./components/problem3";
import Fproblem1 from "./components/fproblem1";
import Fproblem2 from "./components/fproblem2";
import Fproblem3 from "./components/fproblem3";
import Fproblem4 from "./components/fproblem4";
import Fproblem5 from "./components/fproblem5";

function App() {
  const isLoggedIn = window.localStorage.getItem("loggedIn");
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            exact
            path="/"
            element={isLoggedIn == "true" ? <UserDetails /> : <Login />}
          />
          <Route path="/sign-in" element={<Login />} />
          <Route path="/problem1" element={<Problem1 />} />
          <Route path="/problem2" element={<Problem2 />} />
          <Route path="/problem3" element={<Problem3 />} />
          <Route path="/fproblem1" element={<Fproblem1 />} />
          <Route path="/fproblem2" element={<Fproblem2 />} />
          <Route path="/fproblem3" element={<Fproblem3 />} />
          <Route path="/fproblem4" element={<Fproblem4 />} />
          <Route path="/fproblem5" element={<Fproblem5 />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/GeneralProblem" element={<GeneralProblem />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/chatroom" element={<Chatroom />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/userDetails" element={<UserDetails />} />
        </Routes>
        {/* <ImageUpload/> */}
      </div>
    </Router>
  );
}

export default App;
