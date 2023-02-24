import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navbar } from "./components/navbar"

import "./style.css"


export default function App() {
  return (
    <div className="App">

      <Router>
        <Navbar />
        <Routes>
          <Route path="/" />
          <Route path="/cart" />
        </Routes>
      </Router>

    </div>
  )
}