import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import * as authService from '../../services/authService'

import styles from './SignupForm.module.css'
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
        <div className={styles.container}>
            <div className={styles.form_container}>
                <form autoComplete="off" onSubmit={handleSubmit}>
                    <h1>Sign Up</h1>
                    <p>{message}</p>
                    <div className={styles.inputs}>
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
                    <div className={styles.inputs}>
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
                    <div className={styles.inputs}>
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
                    <div className={styles.inputs}>
                        <label htmlFor="passwordConfirm">Confirm</label>
                        <input 
                            type="password" 
                            autoComplete="off"
                            id="passwordConfirm"
                            value={passwordConfirm}
                            name="passwordConfirm"
                            onChange={handleChange}
                        />
                    </div>
                    <div className={styles.buttons}>
                        <div className={styles.buttons_left}>
                            <button disabled={isFormInvalid()}>Sign Up</button>
                        </div>
                        <div className={styles.buttons_right}>
                            <Link to="/"><p>Cancel</p></Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignupForm