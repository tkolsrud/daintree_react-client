import { NavLink } from 'react-router-dom'

function Navbar(){
    return (
        <>
        <h1>Navbar</h1>
        <p><NavLink to='/'>Home</NavLink></p>
        <p><NavLink to='/login'>Login</NavLink></p>
        <p><NavLink to='/signup'>Signup</NavLink></p>
        </>
    )
}

export default Navbar