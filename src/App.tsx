import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreateUserPage from "./pages/CreateUserPage";
import UpdateUserPage from "./pages/UpdateUserPage";
import DeleteUserPage from "./pages/DeleteUserPage";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <Router>
        <div>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/create" element={<CreateUserPage />} />
            <Route path="/update/:id" element={<UpdateUserPage />} />
            <Route path="/delete/:id" element={<DeleteUserPage />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
