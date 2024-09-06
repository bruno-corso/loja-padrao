import styled from 'styled-components'
import { cores } from '../../styles'
import { FaInstagram } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'
import { FaWhatsapp } from 'react-icons/fa'
import { FaShoppingCart } from 'react-icons/fa'

const Conatiner = styled.div`
  height: 28px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${cores.primary};
  color: ${cores.textSecondary};
  padding: 0 5%;
  position: fixed;
  z-index: 2;
`
const SocialMedia = styled.ul`
  display: flex;
  gap: 20px;
  cursor: pointer;
  list-style: none;
  margin: 0;
  padding: 0;
  li {
    align-items: center;
    margin-bottom: 5px;
  }
`

const Carrinho = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
  font-weight: 200;
`

function OverHeader() {
  return (
    <Conatiner>
      <SocialMedia>
        <li>
          <FaInstagram />
        </li>
        <li>
          <FaFacebook />
        </li>
        <li>
          <FaWhatsapp />
        </li>
      </SocialMedia>
      <Carrinho>
        <span>Meu Carrinho</span> <FaShoppingCart />
      </Carrinho>
    </Conatiner>
  )
}

export default OverHeader
