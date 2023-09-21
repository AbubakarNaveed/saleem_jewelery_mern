// import { React, useState, useEffect } from 'react'
// import { Container, TextField, Button } from '@mui/material'
// import Box from '@mui/material/Box'
// import SendIcon from '@mui/icons-material/Send'
// import axios from 'axios'
// import { useSelector, useDispatch } from 'react-redux'
// import { products_data } from '../API_calls/get_products'
// import { initialize_products } from '../Redux/product/productSlice'
// import Card from '../components/AdminCard'

// const Admin = () => {
//   const dispatch = useDispatch()
//   const [name, set_name] = useState('')
//   const [price, set_price] = useState('')
//   const [image, set_image] = useState('')
//   const [detail, set_detail] = useState('')
//   const products = useSelector((state) => state.products.product_list)
//   // const [productImage, set_image] = useState()

//   // const onChangeFile = (e) => {
//   //   set_image(e.target.file[0])
//   // }

//   const imageUpload = (e) => {
//     set_image(e.target.files[0])
//   }

//   const uploadProduct = async () => {
//     try {
//       if (
//         name === '' ||
//         price === '' ||
//         image === '' ||
//         detail.length === 0 ||
//         detail.length > 50
//       ) {
//         alert('Please fill the inputs')
//       } else {
//         const formData = new FormData()
//         formData.append('file', image)
//         formData.append('name', name)
//         formData.append('price', price)
//         formData.append('detail', detail)
//         await axios.post('http://localhost:5000/admin', formData)
//       }
//     } catch (e) {
//       console.log(e)
//     }
//   }
//   useEffect(() => {
//     products_data().then(
//       async (data) => await dispatch(initialize_products(data)),
//     )
//   }, [])
//   return (
//     <>
//       <Container maxWidth="sm">
//         <form
//           onSubmit={() => {
//             uploadProduct()
//           }}
//         >
//           <Box
//             sx={{
//               padding: '5rem 0 5rem 0',
//               display: 'flex',
//               height: '500px',

//               flexDirection: 'column',
//               justifyContent: 'space-around',
//             }}
//           >
//             <TextField
//               id="standard-basic"
//               label="Name"
//               variant="standard"
//               onChange={(e) => {
//                 set_name(e.target.value)
//                 console.log(name)
//               }}
//             />
//             <TextField
//               id="standard-basic"
//               label="Price"
//               variant="standard"
//               onChange={(e) => {
//                 set_price(e.target.value)
//               }}
//             />
//             <TextField
//               id="standard-basic"
//               label="Details"
//               variant="standard"
//               onChange={(e) => {
//                 set_detail(e.target.value)
//               }}
//             />
//             <TextField
//               id="standard-basic"
//               label="Picture"
//               variant="standard"
//               type="file"
//               onChange={(e) => {
//                 imageUpload(e)
//               }}
//             />
//             <Button
//               variant="contained"
//               sx={{ width: '100px' }}
//               endIcon={<SendIcon />}
//               type="submit"
//             >
//               Upload
//             </Button>
//           </Box>
//         </form>
//         <div className="crud_grid">
//           {products.map((product) => (
//             <Card
//               name={product.name}
//               price={product.price}
//               detail="Wait"
//               imageUrl={product.imageName}
//             />
//           ))}
//         </div>
//       </Container>
//     </>
//   )
// }

// export default Admin

import React from 'react'
import Admin from '../components/Admin'

const admin = () => {
  return (
    <div>
      <Admin />
    </div>
  )
}

export default admin
