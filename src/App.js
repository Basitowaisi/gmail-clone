import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import "./App.css"
import Header from "./Header"
import Sidebar from "./Sidebar"

function App() {
  return (
    <div className="app">
      <Header />
      <div className="appBody">
        <Sidebar />
        <Router>
          <Switch></Switch>
        </Router>
      </div>
    </div>
  )
}

export default App
