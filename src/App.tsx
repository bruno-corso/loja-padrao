import Header from './components/Header'
import OverHeader from './components/OverHeader'
import Banner from './components/Banner'
import { GlobalCss } from './styles'
import Itens from './components/Items'

function App(): JSX.Element {
  return (
    <>
      <GlobalCss />
      <div>
        <OverHeader />
        <Header />
        <Banner />
      </div>
      <Itens titulo="Itens" />
    </>
  )
}

export default App
