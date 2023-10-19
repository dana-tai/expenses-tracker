import { useState } from 'react'
import './App.css'
import {Route, Routes} from 'react-router-dom'
import DisplayAllExpenses from './components/DisplayAllExpenses'
import OneExpense from './components/OneExpense'
import NavBar from './components/NavBar'
import Add from './components/Add'
import Edit from './components/Edit'

function App() {

  return (
    <div>
      <NavBar/>
      <Routes>
        <Route index element={<DisplayAllExpenses/>}></Route>
        <Route path='/oneExpense/:id' element={<OneExpense/>}></Route>
        <Route path='/addExpense' element={<Add/>}></Route>
        <Route path='/editExpense/:id' element={<Edit/>}></Route>
      </Routes>
    </div>
  )
}

export default App
