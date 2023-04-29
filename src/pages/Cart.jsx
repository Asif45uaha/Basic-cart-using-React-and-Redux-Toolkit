import { useDispatch, useSelector } from 'react-redux'
import { Remove } from '../store/CartSlice'
import { Link } from 'react-router-dom'
const Cart = () => {
  const dispatch = useDispatch()
  const items = useSelector((state) => state.cart)
  const handleRemove = (id) => {
    dispatch(Remove(id))
  }
  return (
    <div>
      <h3>Cart</h3>
      <div className='cartWrapper'>
        {
          items.length === 0 ?
            <>
              <div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100vh"}}>
                <h2 style={{  color: "#800080" }}>Empty Cart...</h2>
                <Link to={'/'}>
                  <span>Go to Home</span>
                </Link>
              </div>
            </>

            : items.map((product) => (
              <div className='cartCard' key={product.id}>
                <img src={product.image} alt='error' />
                <h5>{product.title}</h5>
                <h5>Rs: {product.price} ₹/-</h5>
                <button className='btn' onClick={() => handleRemove(product.id)}>Remove Item</button>
              </div>
            ))
        }
      </div>
    </div>
  )
}
export default Cart