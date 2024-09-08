import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'

// Components
import Login from './pages/Login/Login'
import Signup from './pages/Signup/Signup'
import Home from './pages/Home/Home'
import ProductDetail from './pages/ProductDetail/ProductDetail'
import Navbar from './components/Navbar/Navbar'
import Profile from './pages/Profile/Profile'
import WishList from './pages/WishList/WishList'
import Department from './pages/Department/Department'

// Services
import * as authService from './services/authService'
import * as profileService from './services/profileService'
// import './App.css'

function App() {
  const navigate = useNavigate()
  const [user, setUser] = useState(authService.getUser())
  const [profile, setProfile] = useState({})

  const handleSignupOrLogin = () => {
    setUser(authService.getUser().user)
  }

  const handleLogout = () => {
    setUser(null)
    authService.logout()
  }

  return (
    <>
    <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dept/:name' element={<Department />} />
        <Route path='/login' element={<Login handleSignupOrLogin={handleSignupOrLogin} setProfile={setProfile} />} />
        <Route path='/signup' element={<Signup handleSignupOrLogin={handleSignupOrLogin} />} />
        <Route path='/product-info' element={<ProductDetail />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/WishList/:wishListId' element={<WishList />} />
      </Routes>
    </>
  )
}

export default App
