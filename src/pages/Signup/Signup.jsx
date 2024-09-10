import { useState, useContext } from 'react'
import SignupForm from '../../components/SignupForm/SignupForm'
import { ProfileContext } from '../../App'

import styles from './Signup.module.css'
function Signup(){
    const [message, setMessage] = useState([''])

    const { setProfile, handleSignupOrLogin } = useContext(ProfileContext)

    const updateMessage = (msg) => {
        setMessage(msg)
    }

    return (
        <div className={styles.container}>
            <main>
                <section className={styles.top}>
                    <SignupForm
                        message={message}
                        updateMessage={updateMessage}
                        handleSignupOrLogin={handleSignupOrLogin}
                        setProfile={setProfile}
                    />
                </section>
            </main>
        </div>
    )
}

export default Signup