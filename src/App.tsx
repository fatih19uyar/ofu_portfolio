import { useState } from 'react'
import './App.css'
import { Button } from './components/ui/button'
import { NavBar } from './components/nav-bar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavBar />
      <div className="card">
        <Button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
      </div>
    </> 
  )
}

export default App
