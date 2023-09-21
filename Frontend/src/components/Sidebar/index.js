import React from 'react'
import {
  SideBarContainer,
  CloseIcon,
  Icon,
  SidebarWrapper,
  SidebarLink,
  Sidebar,
  SidebarMenu,
} from './Sidebar_Element'
const SidebarNav = ({ toggle, isOpen }) => {
  return (
    <SideBarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink
            to="header"
            smooth={true}
            duration={1000}
            onClick={toggle}
          >
            Home
          </SidebarLink>
          <SidebarLink
            to="about"
            smooth={true}
            duration={1000}
            onClick={toggle}
          >
            About
          </SidebarLink>
          <SidebarLink
            to="services"
            smooth={true}
            duration={1000}
            onClick={toggle}
          >
            Services
          </SidebarLink>
          <SidebarLink
            to="products"
            smooth={true}
            duration={1000}
            onClick={toggle}
          >
            Products
          </SidebarLink>
          <SidebarLink
            to="contact"
            smooth={true}
            duration={1000}
            onClick={toggle}
          >
            Contacts
          </SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SideBarContainer>
  )
}

export default SidebarNav
