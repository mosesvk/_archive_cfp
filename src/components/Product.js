import React from 'react'
import { Card } from 'react-bootstrap'
// import {Link} from 'react-router-dom'
// import img from '/images/chicken-pot-pie.jpg'

const Product = ({product}) => {

  return (
    <>
    <Card className='my-3 p-3 rounded'>
      <a href={`/products/${product._id}`}>
        <Card.Img src={product.image}/>
      </a>
      {product.image}
    </Card>
    </>
  )
}

export default Product
