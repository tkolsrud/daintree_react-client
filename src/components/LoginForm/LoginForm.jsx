import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import * as authService from '../../services/authService'

import styles from './LoginForm.module.css'

const LoginForm = ({ message, updateMessage, handleSignupOrLogin, setProfile }) => {
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
            const apiResponse = await authService.login(formData)
            setProfile(apiResponse)
            handleSignupOrLogin()
            navigate('/')
        } catch (err) {
            updateMessage(err.message)
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.form_container}>
                <form
                    autoComplete="off"
                    onSubmit={handleSubmit}
                >
                    <h1>Login</h1>
                    <p>{message}</p>
                    <div className={styles.inputs}>
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
                    <div className={styles.inputs}>
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
                    <div className={styles.buttons}>
                        <div className={styles.buttons_left}>
                            <button type="submit">Log In</button>
                        </div>
                        <div className={styles.buttons_right}>
                            <Link to='/'><p>Cancel</p></Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginForm