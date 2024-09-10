import { useState, useContext } from 'react'
import SignupForm from '../../components/SignupForm/SignupForm'
import { ProfileContext } from '../../App'


function Signup({ handleSignupOrLogin }){
    const [message, setMessage] = useState([''])

    const { setProfile } = useContext(ProfileContext)

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