const express = require('express')
const router = express.Router()
const Products = require('../models/products')
const multer = require('multer')
// const validation = require('./validationMiddleWare')
const { upload } = require('../helper/filehelper')
const fs = require('fs')

// const storage = multer.diskStorage({
//   destination: (req, file, callback) => {
//     callback(null, '../../jewelry/uploads')
//   },
//   filename: (req, file, callback) => {
//     callback(null, file.originalname)
//   },
// })

// const fileFilter = (req, res, cb) => {
//   cb(null, true)
// }

// const upload = multer({ storage })
//storage:storage

//Create new Product
//upload.single('productImage')
router.post('/', upload.single('file'), async (req, res) => {
  let name = req.body.name
  let imageName = req.file.originalname
  let imagePath = req.file.path
  let price = req.body.price
  let detail = req.body.detail
  let date = Date.now()

  const product = new Products({
    name,
    price,
    imagePath,
    imageName,
    date,
    detail,
  })

  try {
    await product.save()
    console.log(product)
    res.send('Success')
    console.log(`${name} is added`)
  } catch (err) {
    res.send(err)
    console.log(err)
  }
})

//Get Products
router.get('/products', async (req, res) => {
  try {
    const product_data = await Products.find()
    res.send(product_data)
    // console.table(product_data)
  } catch (err) {
    res.send(err)
    console.log(err)
  }
})

router.delete('/products/delete/:id', async (req, res) => {
  try {
    const { id } = req.params
    const product_id = id
    const product = await Products.findById(product_id)
    if (!product) {
      res.status(400).json({ message: 'Product didnt exist' })
    } else {
      const path = product.imagePath
      await fs.unlink(path, (err) => {
        if (err) {
          console.log(err)
          res.status(400).json({ message: 'Picture not deleted' })
        } else {
          console.log('success')
        }
      })
      await product.remove()
      res.status(200).json({ message: 'Deletion Success' })
    }
  } catch (err) {}
})

// router.put(
//   '/update/:id',
//   upload.single('productImage'),
//   validation,
//   async (req, res) => {
//     try {
//       await Products.findById(req.params.id).then((product) => {
//         product.name = req.body.name
//         product.price = req.body.price
//         product.image = req.file.originalname
//         product.save()
//       })
//     } catch (err) {
//       res.status(400).send(err)
//       console.log(err)
//     }
//   },
// )

module.exports = router
