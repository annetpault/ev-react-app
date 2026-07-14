import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AddVehicle from './components/AddVehicle'
import ViewVehicle from './components/ViewVehicle'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Routes>
      </Routes>
        <Route path='/' element={<AddVehicle />} />
        <Route path='/view' element={<ViewVehicle />} />
      </BrowserRouter>
    </>
  )
}

export default App
