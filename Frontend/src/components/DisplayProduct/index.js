// import { React, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
// import { useDispatch, useSelector } from 'react-redux'
// import { Image } from './DisplayProductsElements'
import DisplayCard from './displayProductCard'
import { Container } from './DisplayProductsElements'
// import image from '../../../../backend/products/916-gold-necklace-sets-500x500.jpg'

// const display_product = () => {
//   const usestates = useState
//
//   const [view, set_view] = usestates({})
//   // const [image, set_img] = usestates('')
//   const params = useParams
//   const dispatch = useDispatch
//
//   const select = useSelector
//   const products = select((state) => state.products.product_list)
//   let imagename

//   const find_product = (id, list) => {}
//   useeffect(() => {
//     products.map((product) => {
//       if (product._id === id) {
//         imagename = product.imageName
//       }
//     })
//   })

//   // useEffect(() => {}, [])
//   // const product_view = dispatch(findProduct({ id }))
//   return (
//     <div className="displayProductContainer">
//       {products.map((product) => {
//         ;<DisplayCard imageURL={image} />
//       })}
//     </div>
//   )
// }
import React, { useEffect } from 'react'
import {
  Product_Container,
  Product_wrapper,
  Product_heading,
  List_wrapper,
  Image,
  Product_Card,
} from '../Products/products_elements'

import Product_card from '../Products/material-ui-card'

import { Grid } from '@mui/material'

import { useSelector } from 'react-redux'

const displayProduct = () => {
  const params = useParams
  let size = window.innerWidth
  const useeffect = useEffect
  const { id } = params()
  const select = useSelector
  const products = select((state) => state.products.product_list)
  const status = select((state) => state.products.status)
  const view = products.filter((product) => product._id === id)
  useeffect(() => {
    console.log(size)
  }, [])

  console.log(products)
  return (
    <>
      {/* <Container> */}
      {view.map((product) => (
        // <Product_card
        //   id={product._id}
        //   title={product.name}
        //   subtitle={`Rs ${product.price}`}
        //   imageUrl={require(`../../../../backend/products/${product.imageName}`)}
        //   detail={product.detail}
        // />
        <DisplayCard
          imageURL={require(`../../../../products/${product.imageName}`)}
          detail={product.detail}
          price={product.price}
          name={product.name}
        />
      ))}
      {/* </Container> */}
    </>
  )
}
export default displayProduct
