import React from 'react'
import {
  AdminCard,
  Image,
  card_paragrah,
  del_button,
} from './AdminCardElements'
import { CardMedia } from '@mui/material'
import Button from '@mui/material/Button'
import { useDispatch } from 'react-redux'
import { deleteProduct } from '../../Redux/product/productSlice.js'

const Admin_Card = ({ name, price, pic, detail, id }) => {
  const dispatch = useDispatch()
  return (
    <AdminCard>
      <Image src={require(`../../../../products/${pic}`)} />
      
      <card_paragrah>
        <h2>{name}</h2>
        <h3>{price}</h3>
        <p>{detail}</p>
      </card_paragrah>
      <Button
        style={{ marginTop: '30px' }}
        variant="outlined"
        color="error"
        onClick={() => {
          dispatch(deleteProduct({ id }))
        }}
      >
        Delete
      </Button>
    </AdminCard>
  )
}

export default Admin_Card
