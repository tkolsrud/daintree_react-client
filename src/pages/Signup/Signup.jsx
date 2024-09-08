import { useState } from 'react'
import SignupForm from '../../components/SignupForm/SignupForm'

function Signup({ handleSignupOrLogin, setProfile }){
    const [message, setMessage] = useState([''])

    const updateMessage = (msg) => {
        setMessage(msg)
    }

    return (
        <main>
            <section>
                <SignupForm
                    message={message}
                    updateMessage={updateMessage}
                    handleSignupOrLogin={handleSignupOrLogin}
                    setProfile={setProfile}
                />
            </section>
        </main>
    )
}

export default Signup