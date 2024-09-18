import banner from '../../assets/images/banner_2.png'
import styled from 'styled-components'

const ImgSC = styled.img`
  width: 100%;
  margin-top: 109px;
`

function Banner() {
  return <ImgSC src={banner} alt="foto banner loja" />
}

export default Banner
