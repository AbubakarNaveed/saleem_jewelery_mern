import React from 'react'
import Home from './pages/home'
import Admin from './pages/admin'
import Error from './pages/notFound'
import DisplayProduct from './pages/displayProduct'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './Redux/Store/Store'
import { useSelector } from 'react-redux'
import Auth from './pages/auth'
const App = () => {
  const selector = useSelector
  const auth = selector((state) => state.auth.login)
  // const products = selector((state) => state.products.product_list)

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth123" element={<Auth />} />
        <Route path="/view/:id" element={<DisplayProduct />} />
        {auth && <Route path="/admin" element={<Admin />} />}
        <Route path="*"  element={<Error/>}/>

      </Routes>
    </>
  )
}

export default App
