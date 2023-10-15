import { useState } from 'react'
import './App.css'
import {Route, Routes} from 'react-router-dom'
import DisplayAllExpenses from './components/DisplayAllExpenses'
import OneExpense from './components/OneExpense'
import NavBar from './components/NavBar'

function App() {

  return (
    <div>
      <NavBar/>
      <Routes>
        <Route index element={<DisplayAllExpenses/>}></Route>
        <Route path='/oneExpense/:id' element={<OneExpense/>}></Route>
      </Routes>
    </div>
  )
}

export default App
