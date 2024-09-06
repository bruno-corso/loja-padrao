import Header from './components/Header'
import OverHeader from './components/OverHeader'
import { GlobalCss } from './styles'

function App(): JSX.Element {
  return (
    <>
      <GlobalCss />
      <OverHeader />
      <Header />
    </>
  )
}

export default App
