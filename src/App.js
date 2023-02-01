import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import NavBar from "./Components/pages/navbar"
import Landing from './Components/pages/landing'
import Dbinfo from "./Components/pages/dbinfo"

const App = () => {
  return (
    <div>
      <NavBar />
      <Router>
        <Routes>
        <Route exact path='/' element={<Landing />} />
          <Route exact path='/dbinfo' element={<Dbinfo />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
