import React from 'react'
import { Row, Col } from 'react-bootstrap'
import data from '../components/data'
import Product from '../components/Product'
import img from '../images/barz-chocolate.jpg'

const ProductScreen = () => {
  return (
    <div>
      <h1>Fried Pies On Display</h1>
      <img src={img} alt='img'/>
      <Row>
        {
          data.map(item => (
            <Col key={item._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={Product}/>
            </Col>
          ))
        }
      </Row>
    </div>
  )
}

export default ProductScreen
