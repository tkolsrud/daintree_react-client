import { useState, useEffect } from "react"
import { Link, useNavigate } from 'react-router-dom' 

import * as profileService from '../../services/profileService'

import styles from './Profile.module.css'


function Profile({ profile, setProfile }){
    const [cart, setCart] = useState([])
    const [lists, setLists] = useState([])

    if(!profile.cart){
        return <h1>Loading...</h1>
        
    } else {


        const handleRemove = async(e) => {
            e.preventDefault()
            console.log(e.target.id.value)
            const updatedProfile = await profileService.removeFromCart(e.target.id.value)
            setProfile(updatedProfile)

        }

        const shoppingCart = profile.cart.map((product, i) => {
            return (
                <li key={i}>
                    <Link to={`/product-info/${product.apiId}`} >
                                
                                    <div className={styles.product_title}>
                                        {product.title}
                                    </div>
                    </Link>        
                    <div>
                        <form action="delete" onSubmit={handleRemove} >
                                <input hidden name="id" value={product._id} readOnly={true} />
                                <button type="submit">x</button>
                        </form>
                    </div>
                </li>
            )
                    
        })

        const wishLists = profile.wishLists.map((list) => {
            return <li key={list._id}>{list.name}</li>
        })

        async function fetchProduct(product){
            await dummyJSONService.fetchOneProduct(product)
        }

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

