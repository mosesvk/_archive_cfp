import React from 'react'
import { Row, Col } from 'react-bootstrap'
import products from '../products'
import Product from '../components/Product'
// import img from '../images/barz-chocolate.jpg'

const HomeScreen = () => {
  return (
    <div>
      <h1>Fried Pies On Display</h1>
      {/* <img src={img} alt='img'/> */}
      <Row>
        {
          products.map(product => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product}/>
            </Col>
          ))
        }
      </Row>
    </div>
  )
}

export default HomeScreen
