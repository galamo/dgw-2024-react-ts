import { useState } from 'react'
import NabBar from './components/nav-bar'
import Search, { LoginRef } from './components/search'
import Hostages from './components/pages/hostages'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <div>
        <NabBar />
        <Hostages />
        <Search />
        <LoginRef />
      </div>
    </>
  )
}

export default App
