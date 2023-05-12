import React, { useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { Row,Col } from 'react-bootstrap'
import Product from '../components/Product'
import { listProducts } from '../actions/productActions'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { useParams } from 'react-router-dom'



const HomeSreen = () => {
  // const [products,setProducts] = useState([])
  const dispatch = useDispatch()
  const { id } = useParams();

  const productList = useSelector(state => state.productList)
  const { loading, error,products} = productList

  useEffect(() => {
    // console.log('hello hm testing ') 
    // const fetchProducts = async () => {
    //   const {data} = await axios.get('/api/products')


    //   setProducts(data)
    // }

    // fetchProducts()

    dispatch(listProducts())
  }, [dispatch] )

 
 
  return (
    <>
        <h1>Latest Products</h1>
        {loading ? <Loader /> : error ? <Message variant='danger'>{error}</Message> :  <Row>
            {products.map(product => (
                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                  <Product product={product} />
                </Col>
            ))}
        </Row>}
       
      
    </>
  )
}

export default HomeSreen
