import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'

// Components
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'

// Services
import * as authService from './services/authService'

// import './App.css'

function App() {
  const navigate = useNavigate()
  const [user, setUser] = useState(authService.getUser())

  const handleSignupOrLogin = () => {
    setUser(authService.getUser())
  }

  const handleLogout = () => {
    setUser(null)
    authService.logout()
  }

  return (
    <>
    <h1>Testing</h1>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login handleSignupOrLogin={handleSignupOrLogin}/>} />
      </Routes>
    </>
  )
}

export default App
