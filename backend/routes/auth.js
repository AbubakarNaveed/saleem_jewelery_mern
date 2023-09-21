const express = require('express')
const router = express.Router()
const User = require('../models/user')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const {
  verifyTokken,
  getUser,
  refreshToken,
} = require('../controllers/special_controllers')
const dotenv = require('dotenv').config()
const s_key = process.env.SECRET_KEY
const Cookie = require('cookie-parser')

router.post('/signup', async (req, res) => {
  const { username, password } = req.body

  const hashed_password = bcrypt.hashSync(password, 10)
  const user = new User({
    username,
    password: hashed_password,
  })

  try {
    await user.save()
    return res.status(201).json({ message: user })
  } catch (e) {
    console.log(e)
    res.status(400).json({ message: 'Error' })
  }
})

router.post('/login', async (req, res) => {
  const { username, password } = req.body
  let user_id

  try {
    const userExists = await User.findOne({ username })
    if (userExists) {
      // return res.status(400).json({ message: "user doesn't exist", user: null })
      const userPassword = userExists.password
      // console.log(`${userPassword} \n ${password}`)

      const check = await bcrypt.compareSync(password, userPassword, (err) => {
        if (err) {
          throw err
        }
      })

      if (check) {
        const userToken = jwt.sign({ id: userExists._id }, s_key, {
          expiresIn: '1hr',
        })
        const time = new Date(Date.now() + 1000 * 3600)
        user_id = userExists._id
        res.cookie(String(user_id), `${userToken}`, {
          path: '/',
          expires: time,
          httpOnly: true,
          sameSite: 'lax',
        })
        return res
          .status(200)
          .json({ message: 'Success', user: userExists.username })
      } else {
        return res.status(400).json({ message: 'Error', user: null })
      }
    } else {
      return res.status(400).json({ message: 'Error', user: null })
    }
  } catch (e) {
    console.error(e)
    return res.status(400).json({ message: 'Error', user: null })
  }
})

// const verifyTokken = (req, res, next) => {
//   const headers = req.headers['authorization']
//   console.log(headers)
// }
router.get('/user', verifyTokken, getUser)
router.get('/refresh', refreshToken, verifyTokken, getUser)
module.exports = router
