import styled, { createGlobalStyle } from 'styled-components'

export const cores = {
  primary: '#0B2545', // Cor primária, para botões e elementos principais
  secondary: '#13315C', // Cor secundária, para destaques ou elementos secundários
  background: '#EEF4ED ', // Cor de fundo
  textPrimary: '#134074', // Cor principal do texto
  textSecondary: '#8DA9C4', // Cor secundária do texto ou para detalhes
  branco: '#FFFFFF',
  preto: '#000000',
}

export const GlobalCss = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: ${cores.background};
        color: ${cores.textPrimary};
        height: 4000px;
        font-family: 'Roboto';
    }
`

export const Container = styled.div`
  max-width: 1366px;
  width: 100%;
  margin: 0 auto;
`

export const ContainerMd = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
`
