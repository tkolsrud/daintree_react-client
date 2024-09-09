import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import WishListItem from '../../components/WishListItem/WishListItem'

import * as profileService from '../../services/profileService'

function WishList({ setProfile }){
    const [listData, setListData] = useState([])
    let { state } = useLocation()

    useEffect(() => {
        setListData(state.list.products)
    }, [listData])

    if(listData) {
        return(
            <>
            <h1>{state.list.name}</h1>
            <main>
                <div>
                    <ul>
                        {listData.map((product) => {
                            return <WishListItem product={product} />
                        })}
                    </ul>
                </div>
            </main>
            </>

        )
    } else {
        {console.log('loading')}
            return <h1>Loading</h1>
    }
}

export default WishList