import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import styled from 'styled-components'

import { dadosLoja } from '../../config/lojaConfig'
import { cores } from '../../styles'
import { useEffect, useState } from 'react'

const NavBarSC = styled(Navbar)`
  background-color: ${cores.branco} !important;
  position: fixed;
  top: 28px;
  width: 100%;
`

const BrandSC = styled(Navbar.Brand)`
  font-weight: 700;
  color: ${cores.textPrimary};
`

const LinkSC = styled(Nav.Link)`
  font-weight: 100;
  color: ${cores.textPrimary};
  text-transform: uppercase;
`

const NavSC = styled(Nav)`
  color: ${cores.textPrimary};
  border-top: ${({ scroll }) => (scroll > 150 ? '0' : '1px solid')};
  border-color: ${cores.textSecondary};
  margin: 0 auto;
  width: 100vw;
  align-items: center;
  font-weight: 400;
  justify-content: ${({ scroll }) => (scroll > 150 ? 'start' : 'center')};
`

const ContainerSC = styled(Container)`
  flex-direction: ${({ scroll }) => (scroll > 150 ? 'row' : 'column')};
  @media (max-width: 767px) {
    flex-direction: row;
  }
`

function Header() {
  const [scrollOffset, setScrollOffset] = useState(0)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  function handleScroll() {
    setScrollOffset(window.scrollY)
  }

  return (
    <NavBarSC expand="md" className="bg-body-tertiary">
      <ContainerSC scroll={scrollOffset}>
        <BrandSC href="">
          <img
            alt=""
            src="/vite.svg"
            width="25"
            height="25"
            className="d-inline-block align-top"
          />{' '}
          {dadosLoja.nome}
        </BrandSC>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <NavSC scroll={scrollOffset} className="sm-auto">
            <LinkSC href="#itens1">iteM 1</LinkSC>
            <LinkSC href="#iteM2">iteM 2</LinkSC>
            <LinkSC href="#iteM3">iteM 3</LinkSC>
            <LinkSC href="#iteM4">iteM 4</LinkSC>
            <NavDropdown title="SEÇÃO" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">valor 1</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">valor 2</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">valor 3</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">valor 4</NavDropdown.Item>
            </NavDropdown>
          </NavSC>
        </Navbar.Collapse>
      </ContainerSC>
    </NavBarSC>
  )
}

export default Header
