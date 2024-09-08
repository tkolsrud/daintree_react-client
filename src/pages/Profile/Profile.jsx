import { useState, useEffect } from "react"



import styles from './Profile.module.css'


function Profile({ profile, setProfile }){
    const [cart, setCart] = useState([])
    const [lists, setLists] = useState([])


    if(!profile.cart){
        return <h1>Loading...</h1>
        
    } else {
        const shoppingCart = profile.cart.map((product) => {
            return <li key={product._id}>{product.title}</li>
        })

        const wishLists = profile.wishLists.map((list) => {
            return <li key={list._id}>{list.name}</li>
        })

        return (
            <main className={styles.container}>
                <section className={styles.user_info}>
                    <h1>{profile.username}</h1>
                    {/* <p>{profile.email}</p> */}
                </section>
                <section>
                    <main className={styles.list_area}>
                        <div className={styles.cart}>
                            <ul>{shoppingCart}</ul>
                        </div>
                        <div className={styles.wishlists}>
                            <ul>{wishLists}</ul>
                        </div>
                    </main>
                </section>
                <button className={styles.edit}>Edit Profile</button>
            </main>
        )
    }
}

export default Profile