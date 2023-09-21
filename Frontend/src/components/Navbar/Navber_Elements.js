import styled from 'styled-components'
import { Link as LinkRouter } from 'react-router-dom'
import { Link as LinkScroll } from 'react-scroll'
export const Nav = styled.nav`
  background: ${({ nav_scroll }) => (nav_scroll ? 'transparent' : 'black')};
  height: 65px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  margin-top: -65px !important;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 65px;
  padding: 0 1rem;
  z-index: 1;
  width: 100%;
  max-width: 1100px;
`

export const NavLogo = styled(LinkScroll)`
  color: #fdd017;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 2.5rem;
  font-weight: bold;
  text-decoration: none;
  @media screen and (max-width: 650px) {
    font-size: 2rem;
  }
`

export const MobileIcon = styled.ul`
  display: none;
  @media screen and (max-width: 650px) {
    position: absolute;
    top: 12px;
    right: 0;
    color: #fff;
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    transform: translate(-100%, 60%);
    font-size: 1.3rem;
    cursor: pointer;
  }
`

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 650px) {
    display: none;
  }
`

export const NavItem = styled.li`
  height: 65px;
`

export const NavLinks = styled(LinkScroll)`
  color: #fff;
  display: flex;
  font-size: 20px;
  align-items: center;
  text-decoration: none;
  height: 100%;
  cursor: pointer;
  padding: 0 1rem;
  &.active {
    border-bottom: 3px solid #01bf71;
  }
`

// export const Navlogo=
