import styled from 'styled-components'
import CardItem from '../CardItem'

const ContainerSC = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  /* background-color: yellow; */
  padding: 2rem;
`
const CardsSC = styled.div`
  width: 100%;
  /* height: 2000px; */
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  /* align-items: normal; */
  gap: 30px;
`

type Props = {
  titulo: string
}

function Itens({ titulo }: Props) {
  return (
    <ContainerSC>
      <h2>{titulo}</h2>
      <CardsSC>
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
      </CardsSC>
    </ContainerSC>
  )
}

export default Itens
