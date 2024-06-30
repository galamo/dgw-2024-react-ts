import { useState } from 'react'
import NabBar from './components/nav-bar'
import Search, { LoginRef } from './components/search'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <div>
        <NabBar />
        <Search />
        <LoginRef />
      </div>
    </>
  )
}

export default App
