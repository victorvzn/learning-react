import { useEffect, useState } from 'react'
import './App.css'
import { type User } from './types'
import { UsersList } from './components/UsersList'

function App () {
  const [users, setUsers] = useState<User[]>([])
  const [showColors, setShowColors] = useState(false)

  const toggleColors = () => {
    setShowColors(!showColors)
  }

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=100')
      .then(async res => await res.json())
      .then(data => { setUsers(data.results) })
      .catch(err => { console.log(err) })
  }, [])
  return (
    <div className='App'>
      <h1>Prueba técnica</h1>

      <header>
        <button onClick={toggleColors}>Colorea filas</button>
      </header>

      <main>

        <UsersList showColors={showColors} users={users} />
      </main>
    </div>
  )
}

export default App
