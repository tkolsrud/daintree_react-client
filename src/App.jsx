import { useState, useEffect, createContext } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
export const ProfileContext = createContext()

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

  const handleSignupOrLogin = async () => {
    setUser(authService.getUser())
  }

  const handleLogout = () => {
    setUser(null)
    setProfile({})
    authService.logout()
  }

  const fetchProfile = async (profile) =>{
    if(!profile._id) {
      const userProfile = await profileService.getProfile()
      setProfile(userProfile)
    }
  }
  
  useEffect(() =>{  
    fetchProfile(profile)
  }, [])

  return (
    <>
    <ProfileContext.Provider value={{ profile, setProfile, setUser,handleSignupOrLogin }}>
    <Navbar user={user} handleLogout={handleLogout}/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dept/:name' element={<Department />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/product-info/:id' element={<ProductDetail />} />
        <Route path='/profile' element={<Profile fetchProfile={fetchProfile} />} />
        <Route path='/wish-list' element={<WishList /> } />
      </Routes>
    </ProfileContext.Provider>
    </>
  )
}

export default App
