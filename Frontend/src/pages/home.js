import { React, useState, useEffect } from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import Hero from '../components/HeroSection'
import Info from '../components/Info'
import Service from '../components/Services'
import Curve from '../components/Design/Curve'
import Products from '../components/Products'
import { useSelector, useDispatch } from 'react-redux'
import { products_data } from '../API_calls/get_products'
import { initialize_products } from '../Redux/product/productSlice'
import Footer from '../components/Footer/Footer'

const Home = () => {
  const [isOpen, set_isOpen] = useState(false)

  const toggle = () => {
    set_isOpen(!isOpen)
  }

  const dispatch = useDispatch()

  useEffect(() => {
    products_data().then(
      async (data) => await dispatch(initialize_products(data)),
    )
  }, [])

  return (
    <>
      <Sidebar toggle={toggle} isOpen={isOpen} />
      <Navbar toggle={toggle} />
      <Hero />
      <Info />
      <Service />
      <Products />
      <Footer />
    </>
  )
}

export default Home
