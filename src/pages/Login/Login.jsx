import { useState, useContext } from 'react'
import { Link } from 'react-router-dom' 
import { ProfileContext } from '../../App'
import LoginForm from '../../components/LoginForm/LoginForm'

import styles from './Login.module.css'

function Login(){
    const [message, setMessage] =useState([''])

    const { setProfile, handleSignupOrLogin } = useContext(ProfileContext)

    const updateMessage = (msg) => {
        setMessage(msg)
    }

    return (
        <div className={styles.container}>
        <main>
            <section className={styles.top}>
                <LoginForm
                    message={message}
                    updateMessage={updateMessage}
                    handleSignupOrLogin={handleSignupOrLogin}
                    setProfile={setProfile}
                />
            </section>
            <section className={styles.bottom}>
                <p>New user? Sign up<Link className={styles.link} to="/signup"> here!</Link></p>
            </section>
        </main>
        </div>
    )
}

export default Login