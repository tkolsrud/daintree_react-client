import { useState } from 'react' 
import { Link, useNavigate } from 'react-router-dom'
import * as authService from '../../services/authService'

function SignupForm({ message, updateMessage, handleSignupOrLogin, setProfile }){
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        username:'',
        email:'',
        password:'',
        passwordConfirm:'',
    })
    
    const handleChange = (e) => {
        updateMessage('')
        setFormData({ ...formData, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const apiResponse = await authService.signup(formData)
            setProfile(apiResponse)
            handleSignupOrLogin()
            navigate('/')
        } catch (err) {
            updateMessage(err.message)
        }
    }

    const { username, email, password, passwordConfirm } = formData

    const isFormInvalid = () => {
        return !(username && email && password && password === passwordConfirm)
    }

    return (
        <form autoComplete="off" onSubmit={handleSubmit}>
            <h1>Sign Up</h1>
            <p>{message}</p>
            <div>
                <label htmlFor="username">Username</label>
                <input 
                    type="text" 
                    autoComplete="off"    
                    id="username"
                    value={username}
                    name="username"
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input 
                    type="text" 
                    autoComplete="off"
                    id="email"
                    value={email}
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
                    value={password}
                    name="password"
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="passwordConfirm">Confirm Password</label>
                <input 
                    type="password" 
                    autoComplete="off"
                    id="passwordConfirm"
                    value={passwordConfirm}
                    name="passwordConfirm"
                    onChange={handleChange}
                />
            </div>
            <div>
                <button disabled={isFormInvalid()}>Sign Up</button>
                <Link to="/">Cancel</Link>
            </div>
        </form>
    )
}

export default SignupForm