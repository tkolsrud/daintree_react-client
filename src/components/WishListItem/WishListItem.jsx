
import * as profileService from '../../services/profileService'
import styles from './WishListItem.module.css'

function WishListItem({ index, setListData, setProfile, product, id }) {

    const handleRemove = async (e) => {
        e.preventDefault()
        const apiResponse = await profileService.removeFromList(id, e.target.id.value)
        console.log(apiResponse.profile)
        await setProfile(apiResponse.profile)
        setListData(apiResponse.profile.wishLists[index])
    }

    return (
        // <li>{product.title}</li>
        <div className={styles.container}>
            <div className={styles.thumbnail}>
                <img src={product.thumbnail} alt={product.title} />
            </div>
            <div className={styles.info}>
                <div className={styles.title}><p>{product.title}</p></div>
                <div className={styles.price}><p>$ {product.price}</p></div>
            </div>
            <div className={styles.button}>
                <form action="delete" onSubmit={handleRemove}>
                    <input hidden name="id" value={product._id} readOnly={true} />
                    <button type="submit">x</button>
                </form>
            </div>
        </div>
    )
}

export default WishListItem