import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
const Navbar = () => {
    const items= useSelector(state => state.cart)
    return (
        <div className="navContainer" style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
            <span style={{textTransform:"uppercase",fontSize:"20px",fontWeight:"700"}}>Redux Store</span>
            <div className="logo">
                <Link  className="navLink" to={'/'}>Home</Link>
                <Link className="navLink" to={'/cart'}>Cart</Link>
                <span className="cartCount">Cart Items: {items.length}</span>
            </div>
        </div>
    )
}
export default Navbar