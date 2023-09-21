const User = require('../models/user')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv').config()
const s_key = process.env.SECRET_KEY

const verifyTokken = async (req, res, next) => {
  try {
    const cookies = await req.headers.cookie
    console.log(cookies)
    let cookie_array = cookies.split('=')
    const token = cookie_array[1]
    console.log(token)
    if (!token) {
      res.status(404).json({ message: 'Who are you?' })
    } else {
      jwt.verify(`${token}`, s_key, (err, user) => {
        if (err) {
          res.status(400).json({ message: 'invalid token' })
        } else {
          // res.status(200).json({ message: 'Success', Owner: user.id })
          req.id = user.id
          console.log(req.id)
        }
      })
    }
  } catch (e) {
    console.log(e)
  }

  next()
}

const getUser = async (req, res, next) => {
  const _id = req.id
  console.log(_id)
  try {
    user = await User.findOne({ _id }, '-password')
  } catch (err) {
    console.error(err)
    return new Error(err)
  }
  if (!user) {
    return res.status(400).json({ message: 'User not found' })
  } else {
    res.status(200).json({ user: user })
  }
}
const refreshToken = (req, res, next) => {
  const cookies = req.headers.cookie
  let cookie_array = cookies.split('=')
  const prevToken = cookie_array[1]
  if (!prevToken) {
    return res.status(400).json({ message: "Couldn't find token" })
  }
  jwt.verify(String(prevToken), s_key, (err, user) => {
    if (err) {
      console.log(err)
      return res.status(403).json({ message: 'Authentication failed' })
    }
    res.clearCookie(`${user.id}`)
    req.cookies[`${user.id}`] = ''

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET_KEY, {
      expiresIn: '1hr',
    })
    console.log('Regenerated Token\n', token)

    res.cookie(String(user.id), token, {
      path: '/',
      expires: new Date(Date.now() + 1000 * 3600), // 30 seconds
      httpOnly: true,
      sameSite: 'lax',
    })

    req.id = user.id
    next()
  })
}
exports.verifyTokken = verifyTokken
exports.getUser = getUser
exports.refreshToken = refreshToken
