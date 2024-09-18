import Card from 'react-bootstrap/Card'
import styled from 'styled-components'
import { cores } from '../../styles'

const CardSC = styled(Card)`
  z-index: 0;
  border-radius: 0;
`
const CardImgSC = styled(Card.Img)`
  border-radius: 0;
`
const CardTagSC = styled.h5`
  background-color: ${cores.background};
  color: ${cores.textPrimary};
  font-size: 0.65rem;
  display: inline-block;
  padding: 4px;
  box-shadow:
    rgba(0, 0, 0, 0.12) 0px 1px 3px,
    rgba(0, 0, 0, 0.24) 0px 1px 2px;
`
const CardTitleSC = styled(Card.Title)`
  font-size: 1.25rem;
  font-weight: bold;
  color: ${cores.textPrimary};
`
const CardTextSC = styled(Card.Text)`
  font-size: 0.75rem;
  font-weight: lighter;
  color: ${cores.textPrimary};
  margin: 12px 0;
`
const CardButtonSC = styled.button`
  border-radius: 0;
  border: 0;
  padding: 3px 6px;
  width: 40%;
  text-align: center;
  background-color: ${cores.primary};
  color: ${cores.textSecondary};
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  &:hover {
    opacity: 0.8;
  }
`

function CardItem() {
  return (
    <CardSC style={{ width: '18rem' }}>
      <CardImgSC
        // variant="top"
        src="https://images.unsplash.com/photo-1525904097878-94fb15835963?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <Card.Body>
        <CardTagSC>Promoção</CardTagSC>
        <CardTitleSC>Nome Produto</CardTitleSC>
        <CardTextSC>Descrição Produto</CardTextSC>
        <CardTitleSC>R$ 90,99</CardTitleSC>
        <CardButtonSC>Comprar</CardButtonSC>
      </Card.Body>
    </CardSC>
  )
}

export default CardItem
