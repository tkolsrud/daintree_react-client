import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import * as profileService from '../../services/profileService'
import { ProfileContext } from '../../App'
import styles from './Profile.module.css'

import * as authService from '../../services/authService'

function Profile(){
    const { profile, setProfile, setUser } = useContext(ProfileContext)
    const navigate = useNavigate()

    const handleRemove = async(e) => {
            e.preventDefault()
            console.log(e.target.id.value)
            const updatedProfile = await profileService.removeFromCart(e.target.id.value)
            setProfile(updatedProfile)
        }

        const handleDeleteAccount = async () => {
            authService.deleteAccount()
            setUser(null)
            setProfile({})
            navigate('/')
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

        const wishLists = profile.wishLists.map((list, index) => {
            return <Link to='/wish-list' state={{ index }} key={index}>
            <li key={list._id}>{list.name}</li>
            </Link>
        })

        async function fetchProduct(product){
            await dummyJSONService.fetchOneProduct(product)
        }

        return (
            <main className={styles.container}>
                <section className={styles.user_info}>
                    <h1>{profile.username}</h1>
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
                <button onClick={()=>handleDeleteAccount()} className={styles.delete}>Delete Account</button>
            </main>
        )
    }


export default Profile

