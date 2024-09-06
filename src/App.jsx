import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'

// Components
import Login from './pages/Login/Login'
import Signup from './pages/Signup/Signup'
import ProductList from './pages/ProductList/ProductList'
import ProductDetail from './pages/ProductDetail/ProductDetail'
import Navbar from './components/Navbar/Navbar'
import Profile from './pages/Profile/Profile'
import WishList from './pages/WishList/WishList'

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
    <Navbar />
      <Routes>
        <Route path='/' element={<ProductList />} />
        <Route path='/login' element={<Login handleSignupOrLogin={handleSignupOrLogin} />} />
        <Route path='/signup' element={<Signup handleSignupOrLogin={handleSignupOrLogin} />} />
        <Route path='/product-info/:productId' element={<ProductDetail />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/WishList/:wishListId' element={<WishList />} />
      </Routes>
    </>
  )
}

export default App
