import React from 'react'
import {
  Product_Container,
  Product_wrapper,
  Product_heading,
  List_wrapper,
  Image,
  Product_Card,
} from './products_elements'

import Product_card from './material-ui-card'

import { Grid } from '@mui/material'

import { useSelector } from 'react-redux'

const Products = () => {
  const products = useSelector((state) => state.products.product_list)
  const status = useSelector((state) => state.products.status)
  console.log(products)
  return (
    <>
      <Product_Container id="products">
        <Product_wrapper>
          <Product_heading>New Arrivals</Product_heading>
          <List_wrapper>
            <Grid container spacing={5} justifyContent="center">
              {products.map((product) => (
                <Grid item xs={12} sm={6} xl={3} md={6}>
                  <Product_card
                    id={product._id}
                    title={product.name}
                    subtitle={`Rs ${product.price}`}
                    imageUrl={require(`../../../../products/${product.imageName}`)}
                    detail={product.detail}
                  />
                  {/* <Product_Card>
                    <Image
                      src={require(`../../../../backend/products/${product.imageName}`)}
                    />
                    <h1>{product.name}</h1>
                    <h2>{product.price}</h2>
                  </Product_Card> */}
                </Grid>
              ))}
            </Grid>
          </List_wrapper>
        </Product_wrapper>
      </Product_Container>
    </>
  )
}

export default Products
