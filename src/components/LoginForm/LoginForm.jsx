import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import * as authService from '../../services/authService'

const LoginForm = ({ message, updateMessage, handleSignupOrLogin }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })
    const navigate = useNavigate()

    const handleChange = (e) => {
        updateMessage('')
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await authService.login(formData)
            await handleSignupOrLogin()
            navigate('/')
        } catch (err) {
            updateMessage(err.message)
        }
    }

    return (
        <form
            autoComplete="off"
            onSubmit={handleSubmit}
        >
            <h1>Login</h1>
            <p>{message}</p>
            <div>
                <label htmlFor="email">Email</label>
                <input 
                    type="text"
                    autoComplete="off"
                    id="email"
                    value={formData.email}
                    name="email"
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input 
                    type="password"
                    autoComplete="off" 
                    id="password"
                    value={formData.pw}
                    name="password"
                    onChange={handleChange}
                />
            </div>
            <div>
                <button>Log In</button>
                <Link to='/'>Cancel</Link>
            </div>
        </form>
    )
}

export default LoginForm