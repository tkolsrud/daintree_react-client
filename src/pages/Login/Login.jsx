import { useState } from 'react'

// Components
import LoginForm from '../../components/LoginForm/LoginForm'

function Login({ handleSignupOrLogin }){
    const [message, setMessage] =useState([''])

    const updateMessage = msg => {
        setMessage(msg)
    }

    return (
        <main>
            <section>
                <LoginForm
                    message={message}
                    updateMessage={updateMessage}
                    handleSignupOrLogin={handleSignupOrLogin}
                />
            </section>
        </main>
    )
}

export default Login