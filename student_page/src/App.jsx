import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Students from "./components/Students";
import AddStudent from "./components/AddStudents";
import Counter from "./components/Counter";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css"

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/students" element={<Students />} />
        <Route path="/add" element={<AddStudent />} />
        <Route path="/counter" element={<Counter />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;