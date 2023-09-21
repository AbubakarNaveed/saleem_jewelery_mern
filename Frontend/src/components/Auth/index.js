import React, { useState, useEffect } from 'react'
import { TextField, InputAdornment, IconButton } from '@mui/material'
import AccountCircle from '@mui/icons-material/AccountCircle'
import KeyIcon from '@mui/icons-material/Key'
import { AuthContainer, AuthWrapper } from './AuthElements'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import { login } from '../../API_calls/admin_login'
import { useDispatch, useSelector } from 'react-redux'
import { loggedIn } from '../../Redux/Auth/authSlice'
import { useNavigate } from 'react-router-dom'
const Auth_Screen = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [is_error, set_error] = useState(false)
  const [user, set_user] = useState('')
  const [password, set_password] = useState('')
  const [change_version, set_version] = useState('password')
  const [visible, set_visible] = useState(false)
  const toggle_change = (flag) => {
    if (flag === true) {
      set_version('')
    } else {
      set_version('password')
    }
  }

  const toggle_visible = () => {
    set_visible(!visible)
  }

  const userLogin = async () => {
    let userData
    if (user === '' || password === '') {
      alert('Please enter your password or username')
      set_error(true)
    } else {
      set_error(false)
      const data = await login(user, password)
      userData = await data
      if (userData.user != null) {
        dispatch(loggedIn())
        alert(userData.message)
        //console.log(userData.message)
        navigate('/admin')
      } else {
        alert('Error')
      }
    }
  }

  useEffect(() => {
    toggle_change(visible)
  }, [visible])

  // const submission = () => {
  //   if (user === '' || password === '') {
  //     alert('Please enter your password or username')
  //     set_error(true)
  //   } else {
  //     set_error(false)
  //   }
  // }
  return (
    <AuthContainer>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          userLogin()
        }}
      >
        <AuthWrapper>
          <TextField
            error={is_error}
            id="input-with-icon-textfield"
            size="large"
            placeholder="User"
            onChange={(e) => {
              set_user(e.target.value)
            }}
            fullWidth={true}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle fontSize="large" />
                </InputAdornment>
              ),
            }}
            variant="standard"
          />
          <TextField
            error={is_error}
            id="input-with-icon-textfield"
            size="large"
            placeholder="Password"
            type={change_version}
            onChange={(e) => {
              set_password(e.target.value)
            }}
            fullWidth={true}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <KeyIcon fontSize="large" />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    edge="end"
                    onClick={() => {
                      toggle_visible()
                    }}
                  >
                    {visible ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            variant="standard"
          />
          <button className="button_auth" type="submit">
            Login
          </button>
        </AuthWrapper>
      </form>
    </AuthContainer>
  )
}

export default Auth_Screen
