import { useState } from 'react'
import './App.css'
import Todo from './components/Todo'
import Addtodo from './components/Addtodo'

function App() {

  return (
    <div>
      <Addtodo/>
      <Todo/>

    </div>
  )
}

export default App
