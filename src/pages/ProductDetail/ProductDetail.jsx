import { useState, useEffect, useContext } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import NewListForm from '../../components/NewListForm/NewListForm'
import HalfStar from '../../components/HalfStar/HalfStar'
import Star from '../../components/Star/Star'
import CartModal from '../../components/CartModal/CartModal'
import ListModal from '../../components/ListModal/ListModal'
import LoginModal from '../../components/LoginModal/LoginModal'
import { ProfileContext } from '../../App'

import * as profileService from '../../services/profileService'
import * as dummyJSONService from '../../services/dummyJSONService'

import styles from './ProductDetail.module.css'

function ProductDetail(){
    const [starRating, setStarRating] = useState([])
    const [product, setProduct] = useState({})
    const [selectOptions, setSelectOptions] = useState([])
    const [showNewListForm, setShowNewListForm] = useState(false)
    const [showCartModal, setShowCartModal] = useState(false)
    const [showListModal, setShowListModal] = useState(false)
    const [showLoginModal, setShowLoginModal] = useState(false)

    const handleShowListForm = () => setShowNewListForm(true)
    const handleShowLoginModal = () => setShowLoginModal(true)

    const { profile, setProfile } = useContext(ProfileContext)

    let { id } = useParams()
    const navigate = useNavigate()
    
    useEffect(()=>{
        async function oragnizeState(id){
            await fetchProduct(id)
        }
        oragnizeState(id)        
    }, [])
    
    const fetchProduct = async(id) => {
        const apiResponse = await dummyJSONService.fetchOneProduct(id)
        setProduct(apiResponse)
        makeIcons(apiResponse.rating)
        if(profile) makeOptions(profile)
    }

    const makeIcons = (num) => {
        const starArr = []
        for(let i=1; i < num; i++){
            starArr.push(<Star key={i}/>)
        }
        setStarRating(starArr)
    }

    const makeOptions = (profile) => {
        if(profile.wishLists){
            const options = profile.wishLists.map((list) => {
                return <option value={list._id} key={list._id}>{list.name}</option>
            })
            setSelectOptions(options)
        }
    }

    const submitCart = async (e) => {
        e.preventDefault()
        if(!profile._id) return handleShowLoginModal()
        const productData = {
            apiId: product.id,
            title: product.title,
            description: product.description,
            brand: product.brand,
            price: product.price,
            tags: product.tags,
            thumbnail: product.thumbnail
        }

        if(!productData.brand) productData.brand = 'Daintree Basics'
        await setProfile(await profileService.addToCart(productData))
        // navigate('/profile')
        setShowCartModal(true)
    }

    

    const submitToList = async (e) => {
        e.preventDefault()
        if(e.target.value === "new") return handleShowListForm()
        console.log("submit")
        const id = e.target.value
        const listProduct = {
            apiId: product.id,
            title: product.title,
            description: product.description,
            brand: product.brand,
            price: product.price,
            tags: product.tags,
            thumbnail: product.thumbnail
        }
        if(!listProduct.brand) listProduct.brand = 'Daintree Basics'
        const updatedProfile = await profileService.addToWishList(id, listProduct)
        setProfile(updatedProfile)
        setShowListModal(true)
    }
    
    const submitNewList = async (e) => {
        e.preventDefault()
        const name = e.target.listName.value
        const listProduct = [{
            apiId: product.id,
            title: product.title,
            description: product.description,
            brand: product.brand,
            price: product.price,
            tags: product.tags,
            thumbnail: product.thumbnail
        }]
        console.log(name, listProduct)
        const updatedProfile = await profileService.createWishList(name, listProduct)
        setProfile(updatedProfile)
        setShowNewListForm(false)
        setShowListModal(true)
    }

    if(!product.images || !starRating.length ){

        return <h1>Loading...</h1>

    } else {

        return (
            <main className={styles.container}>
                <div className={styles.container_top}>
                    <div className={styles.image}>
                        <img src={product.images[0]} alt={product.title} />
                    </div>
                    <div className={styles.title}>
                        <h1>{product.title}</h1>
                    </div>
                    <div className={styles.brand}>
                        {!product.brand ? <p>Daintree Basics</p> : <p>{product.brand}</p>}
                    </div>
                </div>
                <div className={styles.container_bottom}>
                    <div className={styles.price}>
                        <p>$ {product.price}</p>
                    </div>
                    <div className={styles.description}>
                        <p>{product.description}</p>
                    </div>
                    <div className={styles.rating}>
                        <p>{starRating}<HalfStar /> ({product.rating})</p>
                    </div>
                </div>
                <button onClick={submitCart}>Add to Cart</button>
                <LoginModal 
                    show={showLoginModal} 
                    setShow={setShowLoginModal}
                />
                {profile._id ? (
                    <>
                    <form onChange={submitToList}>
                    <select name="wishLists" id="wishList-select">
                        <option value="">Add to wishlist</option>
                        {selectOptions}
                        <option value="new">Create New List</option>
                    </select>
                </form>
                <NewListForm 
                    show={showNewListForm}
                    setShow={setShowNewListForm}
                    submitNewList={submitNewList}
                />
                <CartModal
                    show={showCartModal}
                    setShow={setShowCartModal}
                />
                <ListModal
                    show={showListModal}
                    setShow={setShowListModal}
                />
                </>) : (
                    null
                )}
            </main>

)}}
export default ProductDetail