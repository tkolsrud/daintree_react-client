import { useState } from 'react'
import { Link } from 'react-router-dom' 
// Components
import LoginForm from '../../components/LoginForm/LoginForm'

function Login({ handleSignupOrLogin, setProfile }){
    const [message, setMessage] =useState([''])

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