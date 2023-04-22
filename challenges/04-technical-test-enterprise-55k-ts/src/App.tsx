import { useEffect, useState } from 'react'
import './App.css'
import { type User } from './types'
import { UsersList } from './components/UsersList'

function App () {
  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=100')
      .then(async res => await res.json())
      .then(data => { setUsers(data.results) })
      .catch(err => { console.log(err) })
  }, [])
  return (
    <div className='App'>
      <h1>Prueba técnica</h1>

      <UsersList users={users} />
    </div>
  )
}

export default App
