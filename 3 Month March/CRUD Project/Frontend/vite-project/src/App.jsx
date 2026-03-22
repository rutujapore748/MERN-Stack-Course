import 'bootstrap/dist/css/bootstrap.min.css';
//import React from 'react'
import HomePage from './screens/HomePage'


const App = () => {

  const name = "Hoc"

  return (
    <div>
      <h2>{name}</h2>
      <HomePage/>
    </div>
  )
}

export default App
