import styled from 'styled-components'
import { FaTimes } from 'react-icons/fa'
import { Link as LinkScroll } from 'react-scroll'

export const SideBarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background-color: black;
  display: grid;
  align-items: center;
  left: 0;
  top: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? '100' : '0')};
  top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`

export const CloseIcon = styled(FaTimes)`
  color: #ffff;
  font-size: 1.5rem;
`
export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.2rem;
  background: transparent;
  cursor: pointer;
  outline: none;
`
export const SidebarWrapper = styled.div`
  padding-top: 2rem;
`

export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;
  @media screen and (max-width: 350px) {
    grid-template-rows: repeat(6, 70px);
  }
`

export const SidebarLink = styled(LinkScroll)`
  display: flex;
  color: #fdd017 !important;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  transition: 0.2 ease-in-out;
  text-decoration: none;
  color: #fff;
  cursor: pointer;

  &:hover {
    color: #01bf71;
    transition: 0.2s ease-in-out;
  }
`
