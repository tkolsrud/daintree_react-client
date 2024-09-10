import { useState, useContext } from 'react'
import { Link } from 'react-router-dom' 
import { ProfileContext } from '../../App'
// Components
import LoginForm from '../../components/LoginForm/LoginForm'
import Profile from '../Profile/Profile'

function Login({ handleSignupOrLogin }){
    const [message, setMessage] =useState([''])

    const { setProfile } = useContext(ProfileContext)

    const updateMessage = (msg) => {
        setMessage(msg)
    }

    return (
        <main>
            <section>
                <LoginForm
                    message={message}
                    updateMessage={updateMessage}
                    handleSignupOrLogin={handleSignupOrLogin}
                    setProfile={setProfile}
                />
            </section>
            <section>
                <p>New user? <Link to="/signup">Sign up here!</Link></p>
            </section>
        </main>
    )
}

export default Login