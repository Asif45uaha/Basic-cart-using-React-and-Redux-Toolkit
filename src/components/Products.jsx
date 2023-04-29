import { useEffect } from "react"
// import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import { add } from '../store/CartSlice'
import { fetchProducts } from "../store/productSlice"
import { STATUSES } from "../store/productSlice"
const Products = () => {
    const dispatch = useDispatch()
    // const [products, setProducts] = useState([])
    const {data:products,status} = useSelector((state)=> state.product)

    useEffect(() => {
        // async function fetchProducts() {
            // const { data } = await axios.get('https://fakestoreapi.com/products')
            // setProducts(data)
            dispatch(fetchProducts())
        // }
    }, [dispatch])
    const handleAdd = (product) => {
        dispatch(add(product))
    }
    if (status === STATUSES.LOADING) {
        return <h2 style={{textAlign:"center"}}>Loading....</h2>;
    }

    if (status === STATUSES.ERROR) {
        return <h2 style={{textAlign:"center"}}>Something went wrong!</h2>;
    }
    return (
        <div className="productsWrapper">
            {products.map((product) => (
                <div className="card" key={product.id}>
                    <img src={product.image} alt="error" />
                    <h3 style={{ color: "green", width: "100%" }}>{product.title}</h3>
                    <h5 >Rs: {product.price} ₹/-</h5>
                    <button className="btn" style={{ width: "100%" }} onClick={() => handleAdd(product)}>
                        Add To Cart
                    </button>
                </div>
            ))}
        </div>
    )
}
export default Products