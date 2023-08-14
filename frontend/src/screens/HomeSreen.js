// import React, { useEffect} from 'react'
// import { useDispatch,useSelector } from 'react-redux'
// import { Row,Col } from 'react-bootstrap'
// import Product from '../components/Product'
// import { listProducts } from '../actions/productActions'
// import Message from '../components/Message'
// import Loader from '../components/Loader'
// import { useParams } from "react-router-dom";
// import ProductCarousel from "../components/ProductCarousal";
// import Meta from "../components/Meta";
// import { Link } from "react-router-dom";





// const HomeSreen = () => {
//   // const [products,setProducts] = useState([])
//   const dispatch = useDispatch()
//   const keyword = useParams().keyword;

//   const productList = useSelector(state => state.productList)
//   const { loading, error,products} = productList

//   useEffect(() => {
//     // console.log('hello hm testing ') 
//     // const fetchProducts = async () => {
//     //   const {data} = await axios.get('/api/products')


//     //   setProducts(data)
//     // }

//     // fetchProducts()

//     dispatch(listProducts(keyword))
//   }, [dispatch,keyword] )

 
 
//   return (
//     <>
//     <Meta />
//       {!keyword ? (
//         <ProductCarousel />
//       ) : (
//         <Link to="/" className="btn btn-dark my-3">
//           Go Back
//         </Link>
//       )}
//         <h1>Latest Products</h1>
//         {loading ? <Loader /> : error ? <Message variant='danger'>{error}</Message> :  <Row>
//             {products.map(product => (
//                 <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
//                   <Product product={product} />
//                 </Col>
//             ))}
//         </Row>}
       
      
//     </>
//   )
// }

// export default HomeSreen

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Row } from "react-bootstrap";
import Product from "../components/Product";
import { listProducts } from "../actions/productActions";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { useParams } from "react-router-dom";
import ProductCarousel from "../components/ProductCarousal";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";

function HomeScreen() {
  const dispatch = useDispatch();
  const keyword = useParams().keyword;

  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;
  useEffect(() => {
    dispatch(listProducts(keyword));
  }, [dispatch, keyword]);
  return (
    <>
      <Meta />
      {!keyword ? (
        <ProductCarousel />
      ) : (
        <Link to="/" className="btn btn-dark my-3">
          Go Back
        </Link>
      )}
      <h1>Latest Products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row>
          {products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
}

export default HomeScreen;
