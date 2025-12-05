import React from 'react'
import Navbar from './Components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import AllEvents from './Pages/AllEvents'
import EventsDetails from './Pages/EventsDetails'
import Footer from './Components/Footer'


const App = () => {
  return (
    <div>
    
      <Navbar />
      <Routes>

        <Route path="/" element={<Home/>} />
        <Route path="/events" element={<AllEvents/>} />
        <Route path="/events/:id" element={<EventsDetails/>} />
      </Routes>

      <Footer/>
    </div>
  )
}

export default App