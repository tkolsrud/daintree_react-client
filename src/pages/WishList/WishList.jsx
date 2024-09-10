import { useState, useEffect, useContext, Profiler } from 'react'
import { useLocation } from 'react-router-dom'
import WishListItem from '../../components/WishListItem/WishListItem'
import { ProfileContext } from '../../App'
import * as profileService from '../../services/profileService'
import styles from './WishList.module.css'

function WishList(){
    const [listData, setListData] = useState([])
    let { state } = useLocation()
    const { profile, setProfile } = useContext(ProfileContext)

    useEffect(() => {
        const makeList = async () => {
            setListData(profile.wishLists[state.index])
        }
        makeList()
    }, [listData])

    if(!listData.products) {
        {console.log('loading')}
            return <h1>Loading</h1>
    }

    return(
            <>
            <h1>{listData.name}</h1>
            <main>
                <div className={styles.container}>
                    <ul>
                        {listData.products.map((product) => {
                            return <WishListItem index={state.index} setListData={setListData} setProfile={setProfile} product={product} id={listData._id} key={product._id} />
                        })}
                    </ul>
                </div>
            </main>
            </>
        )
    }


export default WishList