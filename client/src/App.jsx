import { useState } from 'react'
import './App.css'
import {Route, Routes} from 'react-router-dom'
import DisplayAllExpenses from './components/DisplayAllExpenses'
import OneExpense from './components/OneExpense'

function App() {

  return (
    <div>
      <Routes>
        <Route index element={<DisplayAllExpenses/>}></Route>
        <Route path='/oneExpense/:id' element={<OneExpense/>}></Route>
      </Routes>
    </div>
  )
}

export default App
