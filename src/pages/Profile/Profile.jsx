import { useState, useEffect } from "react"



import styles from './Profile.module.css'


function Profile({ profile, setProfile }){


    return (
        <main className={styles.container}>
            <section className={styles.title}>
                <h1>{profile.username}</h1>
            </section>
            <section>
                <main>
                    <div className={styles.cart}>
                        cart
                    </div>
                    <div className={styles.wishlists}>
                        lists
                    </div>
                </main>
            </section>
            <button className={styles.edit}>Edit Profile</button>
        </main>
    )
}

export default Profile