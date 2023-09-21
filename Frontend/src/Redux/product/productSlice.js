import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { del_product } from '../../API_calls/delete_product'
const initialState = { product_list: [], status: 'nothing' }

const Products_reducers = createSlice({
  name: 'products',
  initialState,
  reducers: {
    initialize_products: (state, { payload }) => {
      state.product_list = payload
      state.status = 'added'

      console.log(payload)
    },
    deleteProduct: (state, { payload }) => {
      state.product_list = state.product_list.filter(
        (product) => product._id !== payload.id,
      )
      del_product(payload.id)
    },
  },
})

export default Products_reducers.reducer
export const { initialize_products, deleteProduct } = Products_reducers.actions
