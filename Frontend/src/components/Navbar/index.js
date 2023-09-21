import React from 'react'
import { useState, useEffect } from 'react'
import { FaBars } from 'react-icons/fa'
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
} from './Navber_Elements'
const Navbar = ({ toggle }) => {
  const [scroll, setScroll] = useState(true)

  const Nav_Scroll = () => {
    if (window.scrollY >= 65) {
      setScroll(false)
    } else {
      setScroll(true)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', Nav_Scroll)
  }, [])

  return (
    <>
      <Nav nav_scroll={scroll}>
        <NavbarContainer>
          <NavLogo to="/" className="logo">
            Saleem Jewelers
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars onClick={toggle} />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="header" smooth={true} duration={1000}>
                Home
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="about" smooth={true} duration={1000}>
                About
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="services" smooth={true} duration={1000}>
                Services
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="products" smooth={true} duration={1000}>
                Products
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="contact" smooth={true} duration={1000}>
                Contacts
              </NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar
